import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceScreen() {
  const { experiences, education } = portfolioData;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Work & Research Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTag}>CAREER ROADMAP</Text>
        <Text style={styles.sectionTitle}>Work & Research Experience</Text>
        <Text style={styles.sectionSubtitle}>
          Industry internships and specialized computer vision initiatives
        </Text>
      </View>

      {/* Experience Timeline */}
      <View style={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <View key={exp.id} style={styles.timelineItem}>
            {/* Left Timeline Bar & Dot */}
            <View style={styles.timelineLeftCol}>
              <View style={[styles.timelineNode, { borderColor: exp.tagColor }]}>
                <View style={[styles.timelineNodeInner, { backgroundColor: exp.tagColor }]} />
              </View>
              {index < experiences.length - 1 && <View style={styles.timelineLine} />}
            </View>

            {/* Experience Card */}
            <View style={styles.timelineCard}>
              <View style={styles.cardHeader}>
                <View style={[styles.roleBadge, { backgroundColor: exp.tagColor + '15' }]}>
                  <Text style={[styles.roleBadgeText, { color: exp.tagColor }]}>
                    {exp.badgeText}
                  </Text>
                </View>
                <Text style={styles.periodText}>{exp.period}</Text>
              </View>

              <Text style={styles.companyName}>{exp.company}</Text>
              <Text style={styles.locationText}>📍 {exp.location}</Text>

              {/* Bullet points */}
              <View style={styles.bulletsList}>
                {exp.bullets.map((bullet, bIdx) => (
                  <View key={bIdx} style={styles.bulletRow}>
                    <Text style={styles.bulletSymbol}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>

              {/* Tech tags */}
              <View style={styles.techTagsRow}>
                {exp.tech.map((t) => (
                  <View key={t} style={styles.techTag}>
                    <Text style={styles.techTagText}>{t}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Education Header */}
      <View style={[styles.sectionHeader, { marginTop: 28 }]}>
        <Text style={styles.sectionTag}>ACADEMIC BACKGROUND</Text>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionSubtitle}>
          Formal engineering degree and higher secondary education milestones
        </Text>
      </View>

      {/* Education Cards */}
      <View style={styles.educationGrid}>
        {education.map((item) => (
          <View key={item.id} style={[styles.educationCard, { borderTopColor: item.accentColor }]}>
            <View style={styles.eduHeader}>
              <View style={[styles.eduYearBadge, { backgroundColor: item.accentColor + '15' }]}>
                <Text style={[styles.eduYearText, { color: item.accentColor }]}>
                  {item.period}
                </Text>
              </View>
            </View>

            <Text style={styles.eduInstitution}>{item.institution}</Text>
            <Text style={styles.eduDegree}>{item.degree}</Text>

            <View style={styles.scoreRow}>
              <Text style={styles.scoreLabel}>{item.scoreType}</Text>
              <View style={[styles.scoreBadge, { backgroundColor: item.badgeBg }]}>
                <Text style={[styles.scoreText, { color: item.badgeText }]}>
                  {item.score}
                </Text>
              </View>
            </View>
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
    marginBottom: 16,
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
  timelineContainer: {
    paddingLeft: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineLeftCol: {
    alignItems: 'center',
    width: 28,
    marginRight: 8,
  },
  timelineNode: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  timelineNodeInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 4,
  },
  timelineCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 6,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  roleBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
  periodText: {
    fontSize: 10.5,
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#64748b',
  },
  companyName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 2,
  },
  locationText: {
    fontSize: 11,
    color: '#64748b',
    marginBottom: 10,
  },
  bulletsList: {
    gap: 6,
    marginBottom: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletSymbol: {
    fontSize: 14,
    color: '#4f46e5',
    marginRight: 6,
    lineHeight: 18,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  techTagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  techTag: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  techTagText: {
    fontSize: 10.5,
    fontFamily: 'monospace',
    color: '#334155',
    fontWeight: '500',
  },
  educationGrid: {
    gap: 12,
  },
  educationCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopWidth: 4,
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  eduHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eduYearBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  eduYearText: {
    fontSize: 10.5,
    fontFamily: 'monospace',
    fontWeight: '700',
  },
  eduInstitution: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 12,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  scoreLabel: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '500',
  },
  scoreBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  scoreText: {
    fontSize: 11.5,
    fontFamily: 'monospace',
    fontWeight: '800',
  },
});
