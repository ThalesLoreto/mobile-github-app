import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

  console.tron.log('Iha');

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native App</Text>
      <Text style={styles.welcome}>Texto abaixo s</Text>
    </View>
  );
}
