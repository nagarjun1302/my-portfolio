import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function TechStackScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const { techCategories, techStack } = portfolioData;

  const filteredTech = selectedCategory === 'all'
    ? techStack
    : techStack.filter(item => item.category === selectedCategory);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTag}>TECHNOLOGY TOOLBOX</Text>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <Text style={styles.sectionSubtitle}>
          Languages, Fullstack, AI Agents (LangGraph & LangChain), and Embedded Hardware
        </Text>
      </View>

      {/* Categories Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesRow}
      >
        {techCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setSelectedCategory(cat.id)}
              style={[styles.categoryChip, isActive && styles.categoryChipActive]}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryChipText, isActive && styles.categoryChipTextActive]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Grid of Tech Cards */}
      <View style={styles.gridContainer}>
        {filteredTech.map((tech) => (
          <TouchableOpacity
            key={tech.name}
            style={styles.techCard}
            onPress={() => setActiveItem(tech)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: tech.color + '15' }]}>
              <Text style={styles.techIcon}>{tech.icon}</Text>
            </View>
            <Text style={styles.techName} numberOfLines={1}>
              {tech.name}
            </Text>
            <View style={styles.levelPill}>
              <Text style={styles.levelText}>{tech.level}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Interactive Detail Modal for Selected Tech */}
      {activeItem && (
        <Modal
          animationType="fade"
          transparent
          visible={!!activeItem}
          onRequestClose={() => setActiveItem(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <View style={[styles.modalIconBox, { backgroundColor: activeItem.color + '20' }]}>
                  <Text style={styles.modalIcon}>{activeItem.icon}</Text>
                </View>
                <View style={styles.modalTitleBox}>
                  <Text style={styles.modalTechName}>{activeItem.name}</Text>
                  <Text style={styles.modalCategory}>Category: {activeItem.category.toUpperCase()}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setActiveItem(null)}
                  style={styles.closeBtn}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalDivider} />

              <Text style={styles.modalDescTitle}>Implementation & Application:</Text>
              <Text style={styles.modalDesc}>{activeItem.desc}</Text>

              <View style={styles.modalFooter}>
                <View style={styles.proficiencyTag}>
                  <Text style={styles.proficiencyText}>Proficiency: {activeItem.level}</Text>
                </View>
                <TouchableOpacity
                  style={styles.doneBtn}
                  onPress={() => setActiveItem(null)}
                >
                  <Text style={styles.doneBtnText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
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
  categoriesRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    paddingVertical: 2,
  },
  categoryChip: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryChipActive: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  categoryChipTextActive: {
    color: '#ffffff',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  techCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  techIcon: {
    fontSize: 22,
  },
  techName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
    textAlign: 'center',
  },
  levelPill: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  levelText: {
    fontSize: 9,
    fontFamily: 'monospace',
    color: '#64748b',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  modalIcon: {
    fontSize: 24,
  },
  modalTitleBox: {
    flex: 1,
  },
  modalTechName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
  },
  modalCategory: {
    fontSize: 10,
    fontFamily: 'monospace',
    color: '#64748b',
    marginTop: 2,
  },
  closeBtn: {
    padding: 6,
  },
  closeBtnText: {
    fontSize: 18,
    color: '#94a3b8',
    fontWeight: 'bold',
  },
  modalDivider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 14,
  },
  modalDescTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6,
  },
  modalDesc: {
    fontSize: 13,
    color: '#1e293b',
    lineHeight: 20,
    marginBottom: 16,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  proficiencyTag: {
    backgroundColor: '#eef2ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  proficiencyText: {
    fontSize: 11,
    fontFamily: 'monospace',
    color: '#4338ca',
    fontWeight: '700',
  },
  doneBtn: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  doneBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});
