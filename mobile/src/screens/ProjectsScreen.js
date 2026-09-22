import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsScreen({ showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'Agentic AI & LLMs' },
    { id: 'iot', label: 'CV & IoT' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  const handleOpenGitHub = async (url, title) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        showToast?.(`Opening GitHub: ${title}`);
      } else {
        showToast?.(`Unable to open URL: ${url}`);
      }
    } catch (e) {
      showToast?.(`Error launching repository`);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTag}>SOFTWARE ENGINEERING</Text>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        <Text style={styles.sectionSubtitle}>
          Selected autonomous AI agents, computer vision models, and full-stack systems
        </Text>
      </View>

      {/* Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersRow}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setSelectedCategory(cat.id)}
              style={[styles.filterChip, isActive && styles.filterChipActive]}
              activeOpacity={0.7}
            >
              <Text style={[styles.filterChipText, isActive && styles.filterChipTextActive]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Projects List */}
      <View style={styles.projectsList}>
        {filteredProjects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            {/* Top Category Badge */}
            <View style={styles.cardTopRow}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>{project.categoryLabel}</Text>
              </View>
            </View>

            {/* Title & Tagline */}
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectTagline}>{project.tagline}</Text>

            {/* Key Accomplishment Bullets */}
            <View style={styles.bulletsBox}>
              {project.bullets.map((bullet, idx) => (
                <View key={idx} style={styles.bulletRow}>
                  <Text style={styles.bulletSymbol}>▸</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>

            {/* Tech Stack Chips */}
            <View style={styles.techRow}>
              {project.tech.map((t) => (
                <View key={t} style={styles.techBadge}>
                  <Text style={styles.techBadgeText}>{t}</Text>
                </View>
              ))}
            </View>

            {/* GitHub Action CTA */}
            <TouchableOpacity
              style={styles.githubButton}
              onPress={() => handleOpenGitHub(project.github, project.title)}
              activeOpacity={0.7}
            >
              <Text style={styles.githubBtnIcon}>🐙</Text>
              <Text style={styles.githubBtnText}>View Source Code</Text>
              <Text style={styles.githubBtnArrow}>↗</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  sectionHeader: {
    marginBottom: 14,
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
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 2,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    paddingVertical: 2,
  },
  filterChip: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterChipActive: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  filterChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  filterChipTextActive: {
    color: '#ffffff',
  },
  projectsList: {
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopWidth: 4,
    borderTopColor: '#4f46e5',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#eef2ff',
    borderWidth: 1,
    borderColor: '#e0e7ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: '#4338ca',
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 22,
    marginBottom: 4,
  },
  projectTagline: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 12,
  },
  bulletsBox: {
    gap: 8,
    marginBottom: 14,
    backgroundColor: '#f8fafc',
    padding: 10,
    borderRadius: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletSymbol: {
    fontSize: 12,
    color: '#4f46e5',
    marginRight: 6,
    lineHeight: 18,
  },
  bulletText: {
    flex: 1,
    fontSize: 11.5,
    color: '#475569',
    lineHeight: 17,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 14,
  },
  techBadge: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },
  techBadgeText: {
    fontSize: 10.5,
    fontFamily: 'monospace',
    color: '#334155',
    fontWeight: '600',
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2ff',
    borderWidth: 1,
    borderColor: '#c7d2fe',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  githubBtnIcon: {
    fontSize: 14,
  },
  githubBtnText: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: '#4338ca',
  },
  githubBtnArrow: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4338ca',
  },
});
