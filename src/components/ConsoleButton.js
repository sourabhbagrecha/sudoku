import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Context as GameContext} from '../context/GameContext';

function ConsoleButton(props) {
  const { num, isFocused } = props;
  const { state: { board }, enterNumber, setFocused, resetConsoleFocus, resetBoardFocus} = useContext(GameContext);
  const resetBoardFocusCallback = () => resetBoardFocus({num});
  const handleClick = () => {
    const requireFocus = board.every( row => row.every( cell => cell.isClicked === false ));
    console.log({isFocused})
    if(isFocused) return resetConsoleFocus({num}, resetBoardFocusCallback);
    if(requireFocus){
      setFocused({num})
    } else {
      enterNumber({num})
    }
  }
  return (
    <View
      style={[styles.main, isFocused && styles.focusedButton]}
      onTouchStart={handleClick}>
      <Text style={[styles.buttonText, isFocused && styles.focusedText]}>{num === 0 ? "X" : num}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "white",
    width: 60,
    height: 60,
    borderRadius: 16,
    margin: 5,
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 10,
    color: "white"
  },
  focusedButton: {
    backgroundColor: "white",
  },
  focusedText: {
    color: "black"
  }
});

export default ConsoleButton;