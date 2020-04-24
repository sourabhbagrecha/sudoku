import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context as GameContext} from '../context/GameContext';
import blockStyles from '../styles/components/block.styles';

function Block(props) {
  const {num, x, y, isFocused, isClicked, isFixed} = props;
  const { state, setClicked, setFocused, enterNumber } = useContext(GameContext);
  const consoleFocused = state.nums.find(x => x.isFocused);
  const setFocusedCallback = () => setFocused({num: consoleFocused.num});
  const enterNumberCallback = () => enterNumber({num: consoleFocused.num}, setFocusedCallback);
  const handleClick = () => {
    consoleFocused ? setClicked({num: consoleFocused.num, x, y}, enterNumberCallback) : setClicked({num, x, y});
  }
  const borderRight = (y === 2 || y === 5);
  const borderBottom = (x === 2 || x === 5);
  const frameBottomEnd = x !== 8;
  const frameRightEnd = y!== 8;
  return (
    <View onTouchStart={!isFixed && handleClick} style={[
      blockStyles.main,      
      borderBottom ? blockStyles.borderBoxBottom : (frameBottomEnd ? blockStyles.boxGeneralBottom : null),
      borderRight ? blockStyles.borderBoxRight : (frameRightEnd ? blockStyles.boxGeneralRight : null),
    ]}>
      <Text 
        style={[
          blockStyles.blockText,
          isFixed? blockStyles.fixed : null,
          isFocused ? blockStyles.focused: null, 
          isClicked ? blockStyles.clicked: null]}
      > 
        {num !== 0 && num} 
      </Text>
    </View>
  )
};

export default Block;