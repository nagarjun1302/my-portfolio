import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsScreen({ showToast }) {
  const { certificates } = portfolioData;

  const handleVerify = async (url, title) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        showToast?.(`Opening verification badge...`);
      } else {
        showToast?.(`Cannot open link`);
      }
    } catch (e) {
      showToast?.(`Error launching credential link`);
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
        <Text style={styles.sectionTag}>CREDENTIALS & ACCREDITATION</Text>
        <Text style={styles.sectionTitle}>Verified Certifications</Text>
        <Text style={styles.sectionSubtitle}>
          Oracle Agentic AI Associate & Anthropic Claude Professional specializations
        </Text>
      </View>

      {/* Certifications List */}
      <View style={styles.certList}>
        {certificates.map((cert) => (
          <View key={cert.id} style={styles.certCard}>
            {/* Header: Issuer Tag & Date */}
            <View style={styles.cardHeader}>
              <View style={[styles.issuerTag, { backgroundColor: cert.tagBg }]}>
                <Text style={[styles.issuerText, { color: cert.tagText }]}>
                  {cert.issuerTag}
                </Text>
              </View>
              <Text style={styles.certDate}>{cert.date}</Text>
            </View>

            {/* Title & Organization */}
            <Text style={styles.certTitle}>{cert.title}</Text>
            <Text style={styles.certIssuer}>Issued by {cert.issuer}</Text>

            {/* Description */}
            <Text style={styles.certDesc}>{cert.desc}</Text>

            {/* Verification Button */}
            <TouchableOpacity
              style={styles.verifyBtn}
              onPress={() => handleVerify(cert.link, cert.title)}
              activeOpacity={0.7}
            >
              <Text style={styles.verifyBtnText}>Verify Credential</Text>
              <Text style={styles.verifyArrow}>↗</Text>
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
  certList: {
    gap: 14,
  },
  certCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderLeftWidth: 4,
    borderLeftColor: '#4f46e5',
    borderRadius: 14,
    padding: 16,
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
  },
  issuerTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  issuerText: {
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: '800',
  },
  certDate: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#64748b',
  },
  certTitle: {
    fontSize: 15.5,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 21,
    marginBottom: 2,
  },
  certIssuer: {
    fontSize: 11.5,
    color: '#64748b',
    fontWeight: '500',
    marginBottom: 8,
  },
  certDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 14,
  },
  verifyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  verifyBtnText: {
    fontSize: 11.5,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: '#4f46e5',
  },
  verifyArrow: {
    fontSize: 12,
    color: '#4f46e5',
    fontWeight: 'bold',
  },
});
