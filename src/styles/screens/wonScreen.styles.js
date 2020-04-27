import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 50,
      fontWeight: "700",
      color: theme.main.color,
      marginTop: "30%",
      marginBottom: "10%"
    },
    main: {
      backgroundColor: theme.main.backgroundColor,
      flex: 1
    },
    timer: {
      textAlign: "center",
      fontSize: 20,
      marginVertical: "5%",
      color: theme.main.color
    },
    newGameButton: {
      textAlign: "center",
      borderColor: theme.main.color,
      borderWidth: 3,
      padding: "2%",
      fontSize: 25,
      color: theme.main.color,
      marginHorizontal: "10%"
    },
  })
}
  