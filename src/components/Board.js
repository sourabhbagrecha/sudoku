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
    width: 360,
    height: 360,
    marginHorizontal: 15,
    marginTop: 40
  },
  row: {
    flexDirection: "row"
  }
})

export default Board;