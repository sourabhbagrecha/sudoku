import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Block from './Block';

function Board(props) {
  const {boardState} = props;
  return (
    <View style={styles.main}>
      {
        boardState.map((row, x) => (
          <View key={`${x}`} style={styles.row}>
            {
              row.map((cell, c) => (
                <Block key={`${c}`} {...cell}/>
              ))
            }
          </View>
        ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 400,
    marginTop: 5
  },
  row: {
    flexDirection: "row"
  }
})

export default Board;