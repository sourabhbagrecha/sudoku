import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Context as GameContext} from '../context/GameContext';
import blockStyles from '../styles/components/block.styles';
import { Context as ThemeContext } from '../context/ThemeContext';

function Block(props) {
  const {num, x, y, isFocused, isClicked, isFixed} = props;
  const { state, setClicked, setFocused, enterNumber } = useContext(GameContext);
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = blockStyles(currentTheme);
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
      styles.main,      
      borderBottom ? styles.borderBoxBottom : (frameBottomEnd ? styles.boxGeneralBottom : null),
      borderRight ? styles.borderBoxRight : (frameRightEnd ? styles.boxGeneralRight : null),
    ]}>
      <Text 
        style={[
          styles.blockText,
          isFixed ? styles.fixed : null,
          isFocused ? styles.focused: null, 
          isClicked ? styles.clicked: null,
          !(isFixed || isFocused || isClicked) ? styles.normalText : null
        ]}
      > 
        {num !== 0 && num} 
      </Text>
    </View>
  )
};

export default Block;