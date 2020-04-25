import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
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
    controls: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    themeSelector: {
      width: "44%"
    },
    levelSelector: {
      width: "44%"
    },
    timer: {
      textAlign: "center",
      fontSize: 20,
      marginTop: 10
    }
  })
}
  