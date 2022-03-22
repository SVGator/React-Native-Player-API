import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

import { View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
        <WebView
            source={{uri: 'https://www.svgator.com/about-us'}}
            containerStyle={styles.container}
            style={styles.container}
            width={400}
            height={800}
        />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
