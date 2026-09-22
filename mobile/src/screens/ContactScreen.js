import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Linking,
  Platform,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function ContactScreen({ showToast }) {
  const { personal, contactLinks } = portfolioData;
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleLinkPress = async (item) => {
    if (item.actionType === 'email') {
      const emailUrl = `mailto:${item.value}?subject=${encodeURIComponent('Collaboration / Opportunity Inquiry')}`;
      try {
        await Linking.openURL(emailUrl);
        showToast?.(`Composing email to ${item.value}`);
      } catch (e) {
        showToast?.(`Email: ${item.value}`);
      }
    } else if (item.url) {
      try {
        await Linking.openURL(item.url);
        showToast?.(`Opening ${item.label}...`);
      } catch (e) {
        showToast?.(`Unable to open URL`);
      }
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) {
      showToast?.('Please write a message first!');
      return;
    }
    const finalSubject = subject.trim() || `Inquiry from ${senderName || 'Portfolio App User'}`;
    const finalBody = `Hi Nagarjun,\n\n${message}\n\nFrom: ${senderName || 'Anonymous'}`;
    const mailUrl = `mailto:${personal.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
    
    try {
      await Linking.openURL(mailUrl);
      showToast?.('Launching mail app with your message!');
      setMessage('');
      setSubject('');
      setSenderName('');
    } catch (e) {
      showToast?.(`Direct email: ${personal.email}`);
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
        <Text style={styles.sectionTag}>GET IN TOUCH</Text>
        <Text style={styles.sectionTitle}>Contact & Links</Text>
        <Text style={styles.sectionSubtitle}>
          Available for AI engineering positions, research roles, and collaborative projects
        </Text>
      </View>

      {/* Contact Cards Grid */}
      <View style={styles.cardsGrid}>
        {contactLinks.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.contactCard}
            onPress={() => handleLinkPress(item)}
            activeOpacity={0.7}
          >
            <View style={[styles.cardIconBox, { backgroundColor: item.bgColor }]}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
            </View>

            <View style={styles.cardDetails}>
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardValue} numberOfLines={1}>
                {item.value}
              </Text>
              <Text style={styles.cardHint}>{item.hint}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Quick Message Composer Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Send a Direct Message</Text>
        <Text style={styles.formSubtitle}>
          Compose your message and tap Send to open your preferred mail client with fields pre-filled.
        </Text>

        <Text style={styles.inputLabel}>Your Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Alex Smith"
          placeholderTextColor="#94a3b8"
          value={senderName}
          onChangeText={setSenderName}
        />

        <Text style={styles.inputLabel}>Subject</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. AI Engineering Opportunity"
          placeholderTextColor="#94a3b8"
          value={subject}
          onChangeText={setSubject}
        />

        <Text style={styles.inputLabel}>Message</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Hi Nagarjun, I came across your portfolio and would love to connect..."
          placeholderTextColor="#94a3b8"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
          activeOpacity={0.8}
        >
          <Text style={styles.sendButtonText}>Send Message ✉</Text>
        </TouchableOpacity>
      </View>

      {/* Location & Academic Note */}
      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          📍 Located in Chennai, India • Vellore Institute of Technology
        </Text>
        <Text style={styles.copyrightText}>
          React Native Mobile App for P Nagarjun
        </Text>
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
  cardsGrid: {
    gap: 12,
    marginBottom: 24,
  },
  contactCard: {
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
    shadowRadius: 3,
    elevation: 1,
  },
  cardIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIcon: {
    fontSize: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 10,
    fontFamily: 'monospace',
    color: '#64748b',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginVertical: 1,
  },
  cardHint: {
    fontSize: 11,
    color: '#4f46e5',
    fontWeight: '600',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 11.5,
    color: '#64748b',
    lineHeight: 17,
    marginBottom: 14,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 13,
    color: '#0f172a',
    marginBottom: 12,
  },
  textArea: {
    height: 90,
    paddingTop: 10,
  },
  sendButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  footerNote: {
    alignItems: 'center',
    paddingVertical: 10,
    gap: 4,
  },
  footerText: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'center',
  },
  copyrightText: {
    fontSize: 10,
    fontFamily: 'monospace',
    color: '#94a3b8',
    textAlign: 'center',
  },
});
