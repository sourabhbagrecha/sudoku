import React, { useState, useContext, useEffect } from 'react';
import Board from '../components/Board';
import GameConsole from '../components/GameConsole';
import { StyleSheet, Text, View } from 'react-native';
import { Context as GameContext } from '../context/GameContext';

function Game(props) {
  const {} = props
  const {state} = useContext(GameContext);
  const [won, setWon] = useState(false);
  useEffect(() => {
    const currentBoard = state.board.map(row => row.map(cell => cell.num));
    const solution = state.solution;
    console.log("::::::::::::::", JSON.stringify(currentBoard) === JSON.stringify(solution))
    if(JSON.stringify(currentBoard) === JSON.stringify(solution)){
      setWon(true);
    }
  }, [state.board])
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Game</Text>
      <Board boardState={state.board} />
      {
        won ? 
        <Text style={styles.title}>You win!</Text>:
        <GameConsole nums={state.nums}/>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "700",
    color: "white"
  },
  main: {
    backgroundColor: "black",
    flex: 1
  }
})

export default Game;
