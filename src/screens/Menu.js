import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, AsyncStorage, Button, Text } from 'react-native';
import menuScreenStyles from '../styles/screens/menuScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import LevelMenuCard from '../components/LevelMenuCard';
import { Context as LevelContext } from '../context/LevelContext';
import ThemeController from '../components/ThemeController';
import { Context as RecordContext } from '../context/RecordContext';

function Menu(props) {
  const {} = props
  const { state: { currentTheme }, changeTheme } = useContext(ThemeContext);
  const { state: { levels }, updateLevelsData } = useContext(LevelContext);
  const { state: { records }, updateRecordsData } = useContext(RecordContext)
  const styles = menuScreenStyles(currentTheme);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    fetchAsyncStorage();
  }, [])
  
  const fetchAsyncStorage = async () => {
    const themeTitle = await AsyncStorage.getItem("theme");
    const levelsData = await AsyncStorage.getItem("levels");
    const recordsData = await AsyncStorage.getItem("records");
    if(themeTitle) changeTheme({ theme: themeTitle });
    if(levelsData) updateLevelsData({ levels: JSON.parse(levelsData) });
    if(recordsData) updateRecordsData({ records: JSON.parse(recordsData) });
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