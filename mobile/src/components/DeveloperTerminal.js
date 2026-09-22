import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { portfolioData } from '../data/portfolioData';

export default function DeveloperTerminal() {
  const [selectedFile, setSelectedFile] = useState('agents.py');
  const [logs, setLogs] = useState([]);
  const [logIndex, setLogIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const fileData = portfolioData.terminalFiles[selectedFile];
  const allLogs = portfolioData.terminalLogs;

  useEffect(() => {
    if (logIndex < allLogs.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, allLogs[logIndex]]);
        setLogIndex(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setLogs([]);
        setLogIndex(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [logIndex]);

  const restartTerminal = () => {
    setLogs([]);
    setLogIndex(0);
  };

  return (
    <View style={styles.cardContainer}>
      {/* Terminal Title Bar */}
      <View style={styles.titleBar}>
        <View style={styles.titleLeft}>
          <Text style={styles.terminalPromptIndicator}>▍</Text>
          <Text style={styles.titleText}>
            nagarjun@mobile:<Text style={styles.titleDir}>~/projects</Text>$
          </Text>
        </View>
        <View style={styles.windowControls}>
          <TouchableOpacity onPress={restartTerminal} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.reloadBtn}>⟳</Text>
          </TouchableOpacity>
          <View style={[styles.controlDot, { backgroundColor: '#eab308' }]} />
          <View style={[styles.controlDot, { backgroundColor: '#22c55e' }]} />
          <View style={[styles.controlDot, { backgroundColor: '#ef4444' }]} />
        </View>
      </View>

      {/* File Switcher Tabs */}
      <View style={styles.tabsRow}>
        {Object.keys(portfolioData.terminalFiles).map((fileKey) => {
          const item = portfolioData.terminalFiles[fileKey];
          const isSelected = selectedFile === fileKey;
          return (
            <TouchableOpacity
              key={fileKey}
              onPress={() => setSelectedFile(fileKey)}
              style={[styles.tabButton, isSelected && styles.tabButtonActive]}
              activeOpacity={0.7}
            >
              <Text style={styles.tabIcon}>{item.icon}</Text>
              <Text style={[styles.tabText, isSelected && styles.tabTextActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Code Snippet Box */}
      <View style={styles.codeBox}>
        <Text style={styles.fileSubtitle}>// {fileData.subtitle}</Text>
        {fileData.code.map((line, idx) => (
          <View key={idx} style={styles.codeLine}>
            <Text style={styles.lineNumber}>{idx + 1}</Text>
            <Text style={styles.codeText}>{line}</Text>
          </View>
        ))}
      </View>

      {/* Live Terminal Log Stream */}
      <View style={styles.terminalStreamSection}>
        <View style={styles.streamHeader}>
          <View style={styles.streamHeaderLeft}>
            <View style={styles.livePulse} />
            <Text style={styles.streamTitle}>ACTIVE TERMINAL STREAM</Text>
          </View>
          <Text style={styles.bashTag}>bash 5.2</Text>
        </View>

        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          style={styles.logScrollView}
          nestedScrollEnabled
        >
          {logs.map((log, index) => {
            let textColor = '#cbd5e1';
            let prefix = '•';
            if (log.type === 'input') {
              textColor = '#38bdf8';
              prefix = '$';
            } else if (log.type === 'success') {
              textColor = '#4ade80';
              prefix = '✓';
            } else if (log.type === 'accent') {
              textColor = '#a78bfa';
              prefix = '⚡';
            }
            return (
              <View key={index} style={styles.logRow}>
                <Text style={[styles.logPrefix, { color: textColor }]}>{prefix}</Text>
                <Text style={[styles.logText, { color: textColor }]}>{log.text}</Text>
              </View>
            );
          })}
          {logIndex < allLogs.length && (
            <Text style={styles.typingCursor}>█</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#18181b',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3f3f46',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 12,
  },
  titleBar: {
    backgroundColor: '#27272a',
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3f3f46',
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  terminalPromptIndicator: {
    color: '#34d399',
    fontSize: 14,
    marginRight: 6,
    fontWeight: 'bold',
  },
  titleText: {
    fontFamily: 'monospace',
    color: '#e4e4e7',
    fontSize: 11,
    fontWeight: '600',
  },
  titleDir: {
    color: '#38bdf8',
  },
  windowControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 10,
  },
  reloadBtn: {
    color: '#a1a1aa',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 4,
  },
  controlDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#09090b',
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
    paddingHorizontal: 8,
    paddingTop: 6,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: '#27272a',
    borderColor: '#52525b',
  },
  tabIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  tabText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: '#71717a',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#34d399',
    fontWeight: '700',
  },
  codeBox: {
    backgroundColor: '#121214',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
  },
  fileSubtitle: {
    color: '#a1a1aa',
    fontSize: 10,
    fontFamily: 'monospace',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  codeLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  lineNumber: {
    fontFamily: 'monospace',
    color: '#52525b',
    fontSize: 10,
    width: 20,
  },
  codeText: {
    fontFamily: 'monospace',
    color: '#f4f4f5',
    fontSize: 10.5,
    flex: 1,
    lineHeight: 16,
  },
  terminalStreamSection: {
    backgroundColor: '#09090b',
    padding: 12,
  },
  streamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#18181b',
    paddingBottom: 6,
  },
  streamHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  livePulse: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22c55e',
  },
  streamTitle: {
    fontFamily: 'monospace',
    color: '#a1a1aa',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bashTag: {
    fontFamily: 'monospace',
    color: '#34d399',
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  logScrollView: {
    maxHeight: 140,
  },
  logRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  logPrefix: {
    fontFamily: 'monospace',
    fontSize: 10,
    marginRight: 6,
    width: 12,
  },
  logText: {
    fontFamily: 'monospace',
    fontSize: 10,
    flex: 1,
    lineHeight: 15,
  },
  typingCursor: {
    color: '#22c55e',
    fontSize: 11,
    marginTop: 2,
  },
});
