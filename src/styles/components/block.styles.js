import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 0.7,
    width: 40,
    height: 40,
    paddingVertical: 3,
    paddingHorizontal: 6
  },
  blockText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    padding: 2
  },
  focused: {
    backgroundColor: "grey"
  },
  clicked: {
    backgroundColor: "white",
    color: "black"
  },
  borderBoxRight: {
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 0.5)"
  },
  borderBoxBottom: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 0.5)"
  },
  fixed: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    fontWeight: "700"
  },
  boxGeneralBottom: {
    borderBottomColor: "rgba(255, 255, 255, 0.2)"
  },
  boxGeneralRight: {
    borderRightColor: "rgba(255, 255, 255, 0.2)"
  }
})