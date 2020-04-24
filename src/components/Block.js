import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context as GameContext} from '../context/GameContext';

function Block(props) {
  const {num, x, y, isFocused, isClicked} = props;
  const {setClicked} = useContext(GameContext);
  const handleClick = () => {
    setClicked({num, x, y})
  }
  return (
    <View onTouchStart={handleClick} style={{...styles.main}}>
      <Text 
        style={[styles.blockText, isFocused ? styles.focused: null, isClicked ? styles.clicked: null]}
      > 
        {num !== 0 && num} 
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    width: 40,
    height: 40
  },
  blockText: {
    color: "white",
    fontSize: 25,
    textAlign: "center"
  },
  focused: {
    backgroundColor: "grey"
  },
  clicked: {
    backgroundColor: "white",
    color: "black"
  }
})

export default Block;