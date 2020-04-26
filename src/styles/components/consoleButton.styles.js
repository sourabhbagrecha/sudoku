import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: theme.main.color,
      width: 60,
      height: 60,
      borderRadius: 16,
      margin: 5,
    },
    buttonText: {
      fontSize: 25,
      textAlign: "center",
      color: theme.main.color
    },
    buttonView: {
      paddingVertical: 3,
    },
    focusedButton: {
      backgroundColor: theme.clicked.backgroundColor,
    },
    focusedText: {
      color: theme.clicked.color
    },
    secondaryText: {
      textAlign: "center",
      color: theme.secondaryText.color
    },
    focusedSecondaryText: {
      color: theme.clicked.color
    }
  })
}
  