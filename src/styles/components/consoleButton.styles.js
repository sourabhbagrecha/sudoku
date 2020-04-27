import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  const {height, width} = Dimensions.get('window');
  const rem = height/770;
  return StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: theme.main.color,
      width: "16%",
      paddingVertical: 3*rem,
      borderRadius: 16,
      margin: "1.5%",
    },
    buttonText: {
      fontSize: 25*rem,
      textAlign: "center",
      color: theme.main.color
    },
    buttonView: {
      paddingVertical: "2%",
    },
    focusedButton: {
      backgroundColor: theme.clicked.backgroundColor,
    },
    focusedText: {
      color: theme.clicked.color
    },
    secondaryText: {
      textAlign: "center",
      fontSize: 14,
      color: theme.secondaryText.color
    },
    focusedSecondaryText: {
      color: theme.clicked.color
    }
  })
}
  