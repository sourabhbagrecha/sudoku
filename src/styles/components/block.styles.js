import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    main: {
      flex: 1,
      borderWidth: 0.7,
      width: 40,
      height: 40,
      paddingVertical: 2,
      paddingHorizontal: 5
    },
    blockText: {
      color: theme.main.color,
      fontSize: 22,
      textAlign: "center",
      borderRadius: 20,
      padding: 1,
      fontWeight: "bold"
    },
    focused: {
      backgroundColor: theme.focused.backgroundColor,
      color: theme.focused.color
    },
    clicked: {
      backgroundColor: theme.clicked.backgroundColor,
      color: theme.clicked.color
    },
    borderBoxRight: {
      borderRightWidth: 2,
      borderRightColor: theme.boxBorder.region
    },
    borderBoxBottom: {
      borderBottomWidth: 2,
      borderBottomColor: theme.boxBorder.region
    },
    fixed: {
      backgroundColor: theme.fixed.backgroundColor,
      fontWeight: "700"
    },
    boxGeneralBottom: {
      borderBottomColor: theme.boxBorder.general
    },
    boxGeneralRight: {
      borderRightColor: theme.boxBorder.general
    },
    normalText: {
      fontSize: 25
    }
  });
};