import React, { useState, useContext, useEffect } from 'react';
import Board from '../components/Board';
import GameConsole from '../components/GameConsole';
import { Text, View, AsyncStorage } from 'react-native';
import { Context as GameContext } from '../context/GameContext';
import gameScreenStyles from '../styles/screens/gameScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import { Context as LevelContext } from '../context/LevelContext';
import { withNavigation } from 'react-navigation';

function Game(props) {
  const {navigation} = props;
  const level = navigation.getParam('level');

  const { state, state: { board }, initializeBoard} = useContext(GameContext);
  const { state: { currentTheme }, changeTheme } = useContext(ThemeContext);
  const { state: { levels }, updatePendingGame } = useContext(LevelContext);
  const styles = gameScreenStyles(currentTheme);
  
  const [won, setWon] = useState(false);
  const [timerLocal, setTimer] = useState(timer);
  const [loading, setLoading] = useState(true);
  const {puzzle, solution, timer} = levels.find(l => l.title === level).pendingGame;
  
  useEffect(() => {
    initializeBoard({puzzle, solution, timer});
    setTimer(timer);
    setLoading(false);
    const interval = setInterval(() => {
      setTimer(timerLocal => timerLocal+1)
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const currentBoard = board.map(row => row.map(cell => cell.num));
    if(!loading && JSON.stringify(currentBoard) === JSON.stringify(solution)){
      setWon(true);
    }
  }, [board]);
  
  useEffect(() => {
    updatePendingGame({ level, puzzle: state.board, solution, timer: timerLocal });
    updateAsyncStorage()
  }, [timerLocal])

  const updateAsyncStorage = async () => {
    await AsyncStorage.setItem("levelContext", JSON.stringify(levels))
  }

  return (
    !loading && <View style={styles.main}>
      <Text style={styles.timer}>{Math.floor(timerLocal/60) > 0 ? `${Math.floor(timerLocal/60)}M`: null} {timerLocal%60}S</Text>
      <Board boardState={board} />
      {
        won ? 
        <Text style={styles.title}>You win!</Text>:
        <GameConsole nums={state.nums}/>
      }
    </View>
  )
};

export default withNavigation(Game);


{/* <View style={styles.controls}>
  <View style={styles.themeSelector}>
    <RNPSelect
      items={themes.filter(t => t.label !== "White").map(t => ({label: `Theme: ${t.label}`, value: t.title}))}
      onValueChange={value => changeTheme({theme: value})}
      placeholder={{label: "Theme: White", value: "white"}}
      value={currentTheme}
    />
  </View>
  <View style={styles.levelSelector}>
    <RNPSelect
      items={levels.filter(t => t.title !== "Easy").map(l => ({ label: `Level: ${l.title}`, value: l.title }))}
      onValueChange={value => changeLevel({level: value})}
      placeholder={{ label: 'Level: Easy', value: 'Easy' }}
    />
  </View>
</View> */}

// const checkTheme = async () => {
//   const storedTheme = await AsyncStorage.getItem("theme");
//   if(storedTheme){
//     changeTheme({theme: storedTheme});
//   }
// }