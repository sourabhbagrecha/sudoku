import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  const {height, width} = Dimensions.get("window") 
  const rem = height/770;
  return StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 50,
      fontWeight: "700",
      color: theme.main.color
    },
    main: {
      backgroundColor: theme.main.backgroundColor,
      flex: 1
    },
    timer: {
      textAlign: "center",
      fontSize: 20*rem,
      marginVertical: 10*rem,
      color: theme.main.color
    }
  })
}
  