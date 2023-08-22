import { StyleSheet, Text, View } from "react-native";
import { Header } from "./header";
import { ContentPage } from "./middle";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ContentPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
});
