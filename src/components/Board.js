import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Block from './Block';
import boardStyles from '../styles/components/board.styles';
import { Context as ThemeContext } from '../context/ThemeContext';

function Board(props) {
  const {boardState} = props;
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = boardStyles(currentTheme);
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

export default Board;