import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';
import DeveloperTerminal from '../components/DeveloperTerminal';

export default function OverviewScreen({ onNavigate, showToast }) {
  const { personal } = portfolioData;

  const handleOpenLink = async (url, label) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        showToast?.(`Opening ${label}...`);
      } else {
        showToast?.(`Cannot open link: ${url}`);
      }
    } catch (err) {
      showToast?.(`Failed to open link`);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Banner Status Badge */}
      <View style={styles.statusBadgeContainer}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>
          Available for AI Development & Engineering Roles
        </Text>
      </View>

      {/* Hero Greeting & Name */}
      <View style={styles.heroSection}>
        <Text style={styles.heroIntro}>Hi, I'm</Text>
        <Text style={styles.heroName}>{personal.name}</Text>
        <Text style={styles.heroHeadline}>
          Engineering <Text style={styles.heroHeadlineAccent}>Agentic AI Systems</Text> & End-to-End Applications.
        </Text>
        <Text style={styles.heroBio}>{personal.bio}</Text>
      </View>

      {/* Primary Action Buttons */}
      <View style={styles.ctaRow}>
        <TouchableOpacity
          style={styles.primaryCta}
          onPress={() => onNavigate('projects')}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryCtaText}>Explore Projects 🚀</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryCta}
          onPress={() => onNavigate('contact')}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryCtaText}>Get In Touch ✉</Text>
        </TouchableOpacity>
      </View>

      {/* Key Stats Metric Badges */}
      <View style={styles.statsGrid}>
        {personal.stats.map((stat, i) => (
          <View key={i} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statDetail}>{stat.detail}</Text>
          </View>
        ))}
      </View>

      {/* Interactive Developer Terminal */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTag}>INTERACTIVE ENVIRONMENT</Text>
        <Text style={styles.sectionTitle}>Developer Workspace</Text>
        <Text style={styles.sectionSubtitle}>
          Live multi-agent execution timeline, code snippets, and system context
        </Text>
      </View>

      <DeveloperTerminal />

      {/* Quick Access Roadmap Preview */}
      <View style={styles.quickCardsSection}>
        <TouchableOpacity
          style={styles.highlightCard}
          onPress={() => onNavigate('experience')}
          activeOpacity={0.7}
        >
          <View style={styles.highlightIconBox}>
            <Text style={styles.highlightIcon}>💼</Text>
          </View>
          <View style={styles.highlightInfo}>
            <Text style={styles.highlightTitle}>Work & Research</Text>
            <Text style={styles.highlightDesc}>
              Loyalty Automation (AI Intern) & CADS VIT (NIOT Deep-Sea CV)
            </Text>
          </View>
          <Text style={styles.highlightArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.highlightCard}
          onPress={() => onNavigate('skills')}
          activeOpacity={0.7}
        >
          <View style={[styles.highlightIconBox, { backgroundColor: '#eef2ff' }]}>
            <Text style={styles.highlightIcon}>🛠️</Text>
          </View>
          <View style={styles.highlightInfo}>
            <Text style={styles.highlightTitle}>Tech Toolbox</Text>
            <Text style={styles.highlightDesc}>
              LangGraph, LangChain, FastAPI, React, Supabase, OpenCV, Python
            </Text>
          </View>
          <Text style={styles.highlightArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.highlightCard}
          onPress={() => onNavigate('certifications')}
          activeOpacity={0.7}
        >
          <View style={[styles.highlightIconBox, { backgroundColor: '#fef3c7' }]}>
            <Text style={styles.highlightIcon}>📜</Text>
          </View>
          <View style={styles.highlightInfo}>
            <Text style={styles.highlightTitle}>Verified Credentials</Text>
            <Text style={styles.highlightDesc}>
              Oracle Agentic AI & 4 Anthropic Claude Specializations
            </Text>
          </View>
          <Text style={styles.highlightArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* External Direct Links */}
      <View style={styles.socialRow}>
        <TouchableOpacity
          style={styles.socialChip}
          onPress={() => handleOpenLink(personal.github, 'GitHub')}
        >
          <Text style={styles.socialChipText}>🐙 GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialChip}
          onPress={() => handleOpenLink(personal.linkedin, 'LinkedIn')}
        >
          <Text style={styles.socialChipText}>💼 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialChip}
          onPress={() => handleOpenLink(`mailto:${personal.email}`, 'Email')}
        >
          <Text style={styles.socialChipText}>✉ Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 40,
  },
  statusBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginRight: 7,
  },
  statusText: {
    color: '#065f46',
    fontSize: 11,
    fontWeight: '700',
  },
  heroSection: {
    marginBottom: 18,
  },
  heroIntro: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 2,
  },
  heroName: {
    fontSize: 34,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  heroHeadline: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1e293b',
    lineHeight: 28,
    marginBottom: 12,
  },
  heroHeadlineAccent: {
    color: '#4f46e5',
  },
  heroBio: {
    fontSize: 13.5,
    color: '#475569',
    lineHeight: 21,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  primaryCta: {
    flex: 1,
    backgroundColor: '#4f46e5',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  primaryCtaText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  secondaryCta: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryCtaText: {
    color: '#1e293b',
    fontSize: 13,
    fontWeight: '700',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#4f46e5',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1e293b',
  },
  statDetail: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 1,
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#4f46e5',
    paddingLeft: 10,
  },
  sectionTag: {
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: '#4f46e5',
    letterSpacing: 0.8,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 2,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  quickCardsSection: {
    gap: 10,
    marginTop: 16,
    marginBottom: 16,
  },
  highlightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  highlightIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  highlightIcon: {
    fontSize: 20,
  },
  highlightInfo: {
    flex: 1,
  },
  highlightTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  highlightDesc: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
  highlightArrow: {
    fontSize: 18,
    color: '#94a3b8',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 8,
  },
  socialChip: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  socialChipText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#334155',
  },
});
