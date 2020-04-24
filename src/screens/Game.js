import React, { useState, useContext } from 'react';
import Board from '../components/Board';
import GameConsole from '../components/GameConsole';
import { StyleSheet, Text, View } from 'react-native';
import { Context as GameContext } from '../context/GameContext';

function Game(props) {
  const {} = props
  const {state} = useContext(GameContext);
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Game</Text>
      <Board boardState={state.board} />
      <GameConsole nums={state.nums}/>
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
