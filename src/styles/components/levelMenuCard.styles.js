import { StyleSheet, Dimensions } from "react-native";
import themes from '../../constants/themes.json';

export default themeTitle => {
  const theme = themes.find(t => t.title === themeTitle);
  const {height, width} = Dimensions.get('window');
  const rem = height/770;
  return StyleSheet.create({
    main: {
      marginHorizontal: (width*0.03),
      marginTop: "1%",
    },
    cardCommon: {
      borderRadius: 10,
      backgroundColor: theme.main.backgroundColor,
    },
    intro: {
      padding: "3%",
      height: "65%",
      width: (width*0.8),
    },
    records: {
      width: (width*0.8),
      marginTop: (height*0.01),
      padding: 15*rem
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
      padding: "2%",
      fontSize: 23*rem,
      color: theme.main.color,
      marginHorizontal: "10%"
    },
    newGameButton: {
      marginTop: "7%"
    },
    resumeButton: {
      marginTop: "10%"
    },
    levelLogo: {
      width: "70%",
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
    },
    titleSecondary: {
      fontSize: 25*rem,
      color: theme.main.color,
      fontWeight: "bold"
    },
    bodyText: {
      color: theme.main.color
    }
  })
}