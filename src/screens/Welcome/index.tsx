// src/screens/Welcome/index.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to DevFinder!</Text>
      <Text style={styles.subtitle}>
        Connect with local developers and grow together.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                   // Fill the whole screen
    alignItems: 'center',      // Center horizontally
    justifyContent: 'center',  // Center vertically
    padding: 20,               // Add some breathing room
    backgroundColor: '#fff',   // Or use your theme color
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
