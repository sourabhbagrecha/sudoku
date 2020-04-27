import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, AsyncStorage, Button, Text } from 'react-native';
import menuScreenStyles from '../styles/screens/menuScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import LevelMenuCard from '../components/LevelMenuCard';
import { Context as LevelContext } from '../context/LevelContext';
import ThemeController from '../components/ThemeController';

function Menu(props) {
  const {} = props
  const { state: { currentTheme }, changeTheme } = useContext(ThemeContext);
  const { state: { levels }, updateLevelsData } = useContext(LevelContext);
  const styles = menuScreenStyles(currentTheme);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    console.log(levels.find(l => l.title === "Beginner"))
    fetchAsyncStorage();
  }, [])
  
  const fetchAsyncStorage = async () => {
    const themeTitle = await AsyncStorage.getItem("theme");
    if(themeTitle) changeTheme({ theme: themeTitle })
    setLoading(false);
  }
  return (
    !loading &&
    <View style={styles.main}>
      <ThemeController/>
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