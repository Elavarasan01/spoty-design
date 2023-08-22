import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  text1: {
    color: "#FF4081",
    fontFamily: "Exo 2",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 600,
    textAlign: "center",
    marginTop: 36,
  },
  text2: {
    color:"#FFF",
    fontFamily: "Lato",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 300,
    textAlign: "center",
    marginTop:5
  }
});

export const Header = () => {
  return (
    <View>
      <Text style={styles.text1}>Auraluxe</Text>
      <Text style={styles.text2}>Playin from playlist</Text>
    </View>
  );
};
