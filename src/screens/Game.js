import React, { useState, useContext, useEffect } from 'react';
import Board from '../components/Board';
import GameConsole from '../components/GameConsole';
import { Text, View, AsyncStorage } from 'react-native';
import { Context as GameContext } from '../context/GameContext';
import gameScreenStyles from '../styles/screens/gameScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import { Context as LevelContext } from '../context/LevelContext';
import { withNavigation } from 'react-navigation';
import themes from '../constants/themes.json';
import { Context as RecordContext } from '../context/RecordContext';

let themeNow = "black";

function Game(props) {
  const {navigation} = props;
  const level = navigation.getParam('level');
  
  const { state, state: { board }, initializeBoard, resetBoardFocus, resetConsoleFocus} = useContext(GameContext);
  const { state: { currentTheme }, changeTheme } = useContext(ThemeContext);
  const { state: { levels }, updatePendingGame, refreshAfterWinning, updatePendingGameTimer } = useContext(LevelContext);
  const { state: { records }, addRecord } = useContext(RecordContext);

  const styles = gameScreenStyles(currentTheme);
  
  themeNow = currentTheme;
  const [won, setWon] = useState(false);
  const [timerLocal, setTimer] = useState(timer);
  const [loading, setLoading] = useState(true);
  const {puzzle, solution, timer} = levels.find(l => l.title === level).pendingGame;
  
  useEffect(() => {
    initializeBoard({puzzle, solution, timer});
    resetBoardFocus({});
    resetConsoleFocus({});
    setTimer(timer);
    setLoading(false);
    const interval = setInterval(() => {
      if(won){
        setTimer(timerLocal => timerLocal)
      } else {
        setTimer(timerLocal => timerLocal+1)
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const currentBoard = board.map(row => row.map(cell => cell.num));
    updatePendingGame({ level, puzzle: state.board, solution, timer: timerLocal });
    if(!loading && currentBoard.length !== 0 && JSON.stringify(currentBoard) === JSON.stringify(solution)){
      addRecord({ level, time: timerLocal, date: Date.now() })
      updateLocalStorage();
      setWon(true);
      refreshAfterWinning({level});
      navigation.navigate("Won", {board, timerLocal, level});
    }
  }, [board]);

  useEffect(() => {
    updatePendingGameTimer({ timer: timerLocal, level });
    updateLocalStorage();
  }, [timerLocal]);

  const updateLocalStorage = () => {
    AsyncStorage.setItem("levels", JSON.stringify(levels))
  }

  return (
    !loading && <View style={styles.main}>
      <Text style={styles.timer}>{Math.floor(timerLocal/60) > 0 ? `${Math.floor(timerLocal/60)}M`: null} {timerLocal%60}S</Text>
      <Board boardState={board} />
      {
        won ? 
        <>
          <Text style={styles.title}>You win!</Text>
        </>
        :
        <GameConsole nums={state.nums}/>
      }
    </View>
  )
};

Game.navigationOptions = ({navigation}) => {
  const theme = themes.find(t => t.title === themeNow);
  return {
    headerStyle: {
      backgroundColor: theme.main.backgroundColor
    },
    headerTintColor: theme.main.color,
    headerTitleStyle: {
      color: theme.main.color
    }
  }
}

export default withNavigation(Game);