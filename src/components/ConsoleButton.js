import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Context as GameContext} from '../context/GameContext';

function ConsoleButton(props) {
  const { num, isFocused } = props;
  const { state: { board }, enterNumber, setFocused} = useContext(GameContext);
  const handleClick = () => {
    const requireFocus = board.every( row => row.every( cell => cell.isClicked === false ));
    console.log(requireFocus)
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
      <Text style={[styles.buttonText, isFocused && styles.focusedText]}>{num}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    borderColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
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
})

export default ConsoleButton
