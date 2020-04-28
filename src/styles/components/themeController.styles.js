import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default (themeTitle) => {
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    main: {
      flexDirection: "row"
    },
    themeSelectorOuter: {
      width: 50,
      height: 50,
      borderRadius: 25,
      margin: 20,
      padding: 10
    },
    themeSelectorInner: {
      width: 30,
      height: 30,
      borderRadius: 15
    },
    selectedTheme: {
      width: 60, 
      height: 60,
      margin: 10,
      borderRadius: 30, 
      backgroundColor: theme.meta.color
    }
  })
}