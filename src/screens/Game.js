import React, { useState, useContext, useEffect } from 'react';
import Board from '../components/Board';
import GameConsole from '../components/GameConsole';
import { StyleSheet, Text, View } from 'react-native';
import { Context as GameContext } from '../context/GameContext';
import gameScreenStyles from '../styles/screens/gameScreen.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import RNPSelect from 'react-native-picker-select';
import themes from '../constants/themes.json';
import levels from '../constants/levelsConfig.json';
import {AntDesign} from '@expo/vector-icons';

function Game(props) {
  const {} = props
  const { state, changeLevel} = useContext(GameContext);
  const { state: { currentTheme }, changeTheme } = useContext(ThemeContext);
  const styles = gameScreenStyles(currentTheme);
  const [won, setWon] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer+1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const currentBoard = state.board.map(row => row.map(cell => cell.num));
    const solution = state.solution;
    if(JSON.stringify(currentBoard) === JSON.stringify(solution)){
      setWon(true);
    }
  }, [state.board]);
  return (
    <View style={styles.main}>
      <Text style={styles.timer}>{Math.floor(timer/60) > 0 ? `${Math.floor(timer/60)}M`: null} {timer%60}S</Text>
      <View style={styles.controls}>
        <View style={styles.themeSelector}>
          <RNPSelect
            items={themes.filter(t => t.label !== "White").map(t => ({label: `Theme: ${t.label}`, value: t.title}))}
            onValueChange={value => changeTheme({theme: value})}
            placeholder={{ label: "Theme: White", value: "white"}}
          />
        </View>
        <View style={styles.levelSelector}>
          <RNPSelect
            items={levels.filter(t => t.title !== "Easy").map(l => ({ label: `Level: ${l.title}`, value: l.title }))}
            onValueChange={value => changeLevel({level: value})}
            placeholder={{ label: 'Level: Easy', value: 'Easy' }}
          />
        </View>
      </View>
      <Board boardState={state.board} />
      {
        won ? 
        <Text style={styles.title}>You win!</Text>:
        <GameConsole nums={state.nums}/>
      }
    </View>
  )
};

export default Game;
