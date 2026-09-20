import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill-to-Gig 🚀</Text>
      <Text style={styles.subtitle}>Welcome to the Skill-to-Gig App</Text>
      <Text style={styles.status}>✅ App is running!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a365d',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 14,
    color: '#22c55e',
    marginTop: 20,
  },
});
