import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  banner1: {
    marginLeft: 25,
    marginTop: 39,
  },
  banner2: {
    marginLeft: -17,
    marginTop: 39,
  },
  img2: {
    width: 342,
    height: 28,
    marginLeft: 25,
    marginTop: 31,
  },
  suffle: {
    marginLeft: 30,
  },
  next: {
    transform: [{ scaleX: -1 }],
  },
  repeat: {
    marginRight: 30,
  },
  text1: {
    fontFamily: "Lato",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    color: "#fff",
    marginLeft: 25,
    marginTop: 29,
  },
  text2: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    marginLeft: 25,
  },
  text3: {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "left",
    marginLeft: 25,
  },
  text4: {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "right",
    marginRight: 25,
  },
  container: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space between left and right
    alignItems: "center", // Vertically center the items
    marginTop: 16, // Add some top margin
  },
  container2: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space between left and right
    alignItems: "center", // Vertically center the items
    marginTop: 30, // Add some top margin
  },
});

export default styles;
