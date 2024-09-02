import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-yellow-200">
      <Text>Open up to start working on your app!</Text>
    </SafeAreaView>
  );
}
