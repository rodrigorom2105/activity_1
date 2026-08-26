import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RequestComponent from "./components/RequestComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <RequestComponent url="https://raw.githubusercontent.com/rodrigorom2105/activity_1/refs/heads/main/planetas.json" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
