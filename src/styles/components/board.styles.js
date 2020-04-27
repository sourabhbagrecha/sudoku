import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const {height, width} = Dimensions.get("window")
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    main: {
      width: "100%",
      marginTop: "2%"
    },
    row: {
      flexDirection: "row"
    }
  });
};