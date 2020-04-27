import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  const {height, width} = Dimensions.get('window');
  const rem = height/770;
  return StyleSheet.create({
    main: {
      flex: 1,
      borderWidth: 0.7*rem,
      width: 40*rem,
      height: 40*rem,
      paddingVertical: 2*rem,
      paddingHorizontal: 5*rem
    },
    blockText: {
      color: theme.main.color,
      fontSize: 22*rem,
      textAlign: "center",
      borderRadius: 20*rem,
      padding: 1*rem,
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
      borderRightWidth: 2*rem,
      borderRightColor: theme.boxBorder.region
    },
    borderBoxBottom: {
      borderBottomWidth: 2*rem,
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