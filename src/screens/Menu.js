import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import menuScreenStyles from '../styles/screens/menuScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import LevelMenuCard from '../components/LevelMenuCard';
import { ListItem } from 'react-native-elements';
import levels from '../constants/levelsConfig.json';

function Menu(props) {
  const {} = props
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = menuScreenStyles(currentTheme);
  return (
    <View style={styles.main}>
      <FlatList
        data={levels}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item}) => <LevelMenuCard {...item} />}
      />
    </View>  
  )
};

export default Menu;