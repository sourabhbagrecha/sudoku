import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage } from 'react-native'
import { Context as ThemeContext} from '../context/ThemeContext';
import themeControllerStyles from '../styles/components/themeController.styles';
import themes from '../constants/themes.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ThemeController(props) {
  const {} = props
  const { state: { currentTheme}, changeTheme } = useContext(ThemeContext);
  const styles = themeControllerStyles(currentTheme);
  const handleThemeChange = async (t) => {
    changeTheme({theme: t.title});
    await AsyncStorage.setItem("theme", t.title)
  }
  return (
    <View style={styles.main}>
      {themes.map(t => 
        <TouchableOpacity key={t.title} onPress={() => handleThemeChange(t)}>
          <View style={[currentTheme === t.title && { height: 60, width: 60, backgroundColor: t.meta.color, borderRadius: 30, margin: 10 }]}>
            <View style={[styles.themeSelectorOuter, {backgroundColor: t.meta.backgroundColor}]}>
              <View style={[styles.themeSelectorInner, {backgroundColor: t.meta.color}]}>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ThemeController
