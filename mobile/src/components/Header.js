import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  StatusBar,
} from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function Header({ onResumePress, onAvatarPress }) {
  const { personal } = portfolioData;

  const handleResume = () => {
    onResumePress?.();
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        {/* Left Side: Avatar & Name */}
        <TouchableOpacity
          style={styles.profileBox}
          onPress={onAvatarPress}
          activeOpacity={0.8}
        >
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>PN</Text>
            <View style={styles.onlineBadge} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.headerName}>{personal.name}</Text>
            <Text style={styles.headerSubtitle}>VIT Chennai • ECM</Text>
          </View>
        </TouchableOpacity>

        {/* Right Side: Resume CTA */}
        <TouchableOpacity
          style={styles.resumeButton}
          onPress={handleResume}
          activeOpacity={0.7}
        >
          <Text style={styles.resumeBtnText}>Resume 📄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) : (Platform.OS === 'ios' ? 48 : 0),
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 2,
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 10,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  onlineBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: '#ffffff',
    position: 'absolute',
    bottom: -1,
    right: -1,
  },
  nameContainer: {
    justifyContent: 'center',
  },
  headerName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '500',
  },
  resumeButton: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
  },
  resumeBtnText: {
    color: '#ffffff',
    fontSize: 11.5,
    fontWeight: '700',
  },
});
