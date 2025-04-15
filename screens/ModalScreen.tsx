import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { RouteProp } from "@react-navigation/native";

import { View } from '../components/Themed';
import { RootStackParamList } from "../types";

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'SVGator'>;

type Props = {
  route: ModalScreenRouteProp;
}

export default function ModalScreen({route}: Props) {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
        <WebView
            source={{ uri }}
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
