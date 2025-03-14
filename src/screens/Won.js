import React, { useContext, useEffect } from 'react';
import Board from '../components/Board';
import { withNavigation } from 'react-navigation';
import { Context as ThemeContext } from '../context/ThemeContext';
import wonScreenStyles from '../styles/screens/wonScreen.styles';
import { View, Text, BackHandler, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as LevelContext} from '../context/LevelContext';
import { Context as RecordContext } from '../context/RecordContext';

function Won(props) {
  const {navigation} = props;
  const time = navigation.getParam('timerLocal');
  const board = navigation.getParam('board');
  const level = navigation.getParam('level');
  
  const { state: { currentTheme } } = useContext(ThemeContext);
  const { state: { levels }, refreshAfterWinning } = useContext(LevelContext);
  const { state: { records }, addRecord } = useContext(RecordContext);

  const styles = wonScreenStyles(currentTheme);

  const handleNewGameClick = () => {
    navigation.navigate("Home");
  }
  const eventListener = () => {
    return true;
  }
  useEffect(() => {
    refreshAfterWinning({level});
    updateStorage();
    BackHandler.addEventListener('hardwareBackPress', eventListener);
    return async () => {
      BackHandler.removeEventListener('hardwareBackPress', eventListener)
    }
  }, []);

  const updateStorage = async () => {
    await AsyncStorage.setItem("records", JSON.stringify(records));
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>You Win!</Text>
      <Board
        boardState={board}
      />
      <Text style={styles.timer}>{Math.floor(time/60) > 0 ? `${Math.floor(time/60)}M`: null} {time%60}S</Text>
      <TouchableOpacity onPress={handleNewGameClick}>
        <Text style={styles.newGameButton}>
          New Game
        </Text>
      </TouchableOpacity>
    </View>
  )
}


export default withNavigation(Won);
