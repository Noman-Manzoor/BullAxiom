import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView
        source={{ uri: 'https://app.bullaxiom.com' }}
        style={styles.flexContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});