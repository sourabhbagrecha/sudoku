import React, { useContext } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import {Context as GameContext} from '../context/GameContext';
import consoleButtonStyles from '../styles/components/consoleButton.styles';
import { Context as ThemeContext } from '../context/ThemeContext';
import Won from '../screens/Won';
import { Context as RecordContext } from '../context/RecordContext';

function ConsoleButton(props) {
  const { num, isFocused } = props;
  const { state: { board }, enterNumber, setFocused, resetConsoleFocus, resetBoardFocus} = useContext(GameContext);
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = consoleButtonStyles(currentTheme);
  const { state: { records }, addRecord } = useContext(RecordContext);
  const handleClick = () => {
    const requireFocus = board.every( row => row.every( cell => cell.isClicked === false ));
    if(isFocused) return resetConsoleFocus({num}, resetBoardFocusCallback);
    if(requireFocus){
      setFocused({num})
    } else {
      enterNumber({num})
    }
  };
  let exists = 0;
  board.forEach(row => {
    row.forEach(cell => {
      if(num === cell.num){
        exists++;
      }
    })
  });
  return (
    <View
      style={[styles.main, isFocused && styles.focusedButton]}
      onTouchStart={handleClick}>
      <View style={[styles.buttonView]}>
        <Text style={[styles.buttonText, isFocused && styles.focusedText, num === 0 && {paddingVertical: 10}]}>{num === 0 ? "X" : num}</Text>
        {num !== 0 ? <Text style={[styles.secondaryText, isFocused && styles.focusedSecondaryText]}>{9-exists}</Text>: null}
      </View>
    </View>
  )
};

Won.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default ConsoleButton;