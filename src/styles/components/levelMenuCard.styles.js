import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  const {height, width} = Dimensions.get('window');
  return StyleSheet.create({
    main: {
      height: (height*0.6),
      width: (width*0.8),
      marginHorizontal: (width*0.05),
      marginTop: (height*0.05),
      borderRadius: 10,
      backgroundColor: theme.main.backgroundColor,
      padding: 10
    },
    title: {
      fontSize: 50,
      textAlign: "center",
      color: theme.main.color,
      fontWeight: "bold"
    },
    buttonCommon: {
      textAlign: "center",
      borderColor: theme.main.color,
      borderWidth: 3,
      padding: 5,
      fontSize: 25,
      color: theme.main.color,
      bottom: 0,
      marginHorizontal: 20
    },
    newGameButton: {
      marginTop: 20
    },
    resumeButton: {
      marginTop: 20
    },
    levelLogo: {
      width: "60%",
      height: "40%",
      marginTop: "10%",
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    logoBar: {
      width: "14%",
      borderColor: theme.main.color,
      borderWidth: 2,
      alignSelf: "flex-end"
    },
    filled: {
      backgroundColor: theme.main.color
    }
  })
}