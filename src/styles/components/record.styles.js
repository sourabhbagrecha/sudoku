import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const {height, width} = Dimensions.get("window")
  const theme = themes.find(t => t.title === themeTitle);
  const rem = height/770;
  return StyleSheet.create({
    main: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 4*rem
    },
    timeText: {
      color: theme.main.color
    },
    dateText: {
      color: theme.main.color
    }
  });
};