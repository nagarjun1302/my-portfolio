import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
import TabBar from './src/components/TabBar';
import Toast from './src/components/Toast';
import OverviewScreen from './src/screens/OverviewScreen';
import ExperienceScreen from './src/screens/ExperienceScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import TechStackScreen from './src/screens/TechStackScreen';
import CertificationsScreen from './src/screens/CertificationsScreen';
import ContactScreen from './src/screens/ContactScreen';
import { portfolioData } from './src/data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMessage, setToastMessage] = useState(null);
  const [resumeModalVisible, setResumeModalVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleOpenResume = async () => {
    setResumeModalVisible(false);
    const resumeUrl = 'https://github.com/nagarjun1302';
    try {
      await Linking.openURL(resumeUrl);
      showToast('Opening GitHub Profile & Documents...');
    } catch (e) {
      showToast('Could not open resume URL');
    }
  };

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewScreen
            onNavigate={(tab) => setActiveTab(tab)}
            showToast={showToast}
          />
        );
      case 'experience':
        return <ExperienceScreen showToast={showToast} />;
      case 'projects':
        return <ProjectsScreen showToast={showToast} />;
      case 'skills':
        return <TechStackScreen showToast={showToast} />;
      case 'certifications':
        return <CertificationsScreen showToast={showToast} />;
      case 'contact':
        return <ContactScreen showToast={showToast} />;
      default:
        return <OverviewScreen onNavigate={(tab) => setActiveTab(tab)} showToast={showToast} />;
    }
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top App Header */}
      <Header
        onResumePress={() => setResumeModalVisible(true)}
        onAvatarPress={() => setActiveTab('overview')}
      />

      {/* Main Screen Content */}
      <View style={styles.screenContainer}>
        {renderCurrentScreen()}
      </View>

      {/* Bottom Tab Bar */}
      <TabBar activeTab={activeTab} onTabSelect={(tab) => setActiveTab(tab)} />

      {/* Dynamic Toast Feedback */}
      <Toast message={toastMessage} onHide={() => setToastMessage(null)} />

      {/* Resume Quick Action Modal */}
      {resumeModalVisible && (
        <Modal
          animationType="fade"
          transparent
          visible={resumeModalVisible}
          onRequestClose={() => setResumeModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.resumeModalBox}>
              <Text style={styles.modalIcon}>📄</Text>
              <Text style={styles.resumeModalTitle}>Nagarjun's Resume</Text>
              <Text style={styles.resumeModalSubtitle}>
                B.Tech Electronics & Computer Engineering • VIT Chennai
              </Text>
              <Text style={styles.resumeModalDetails}>
                Specializations: Agentic AI Frameworks, Computer Vision (NIOT), Full-Stack Systems.
              </Text>

              <View style={styles.resumeModalActions}>
                <TouchableOpacity
                  style={styles.openResumeBtn}
                  onPress={handleOpenResume}
                >
                  <Text style={styles.openResumeBtnText}>Open Profile & Repos ↗</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cancelResumeBtn}
                  onPress={() => setResumeModalVisible(false)}
                >
                  <Text style={styles.cancelResumeBtnText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  screenContainer: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resumeModalBox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  modalIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  resumeModalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 4,
  },
  resumeModalSubtitle: {
    fontSize: 12,
    color: '#4f46e5',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  resumeModalDetails: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  resumeModalActions: {
    width: '100%',
    gap: 8,
  },
  openResumeBtn: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  openResumeBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  cancelResumeBtn: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelResumeBtnText: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '600',
  },
});
