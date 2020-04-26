import { StyleSheet } from "react-native";
import themes from '../../constants/themes.json';

export default (themeTitle) => {
  const theme = themes.find(t => t.title === themeTitle);
  return StyleSheet.create({
    main: {
      flex: 1
    }
  })
}