import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import levelMenuCardStyles from '../styles/components/levelMenuCard.styles';
import { Context as ThemeContext} from '../context/ThemeContext';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LevelMenuCard(props) {
  const {title, difficulty} = props;
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = levelMenuCardStyles(currentTheme);
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.levelLogo}>
        {[1,2,3,4,5].map(bar => <View key={bar} style={[styles.logoBar, {height: `${(20+(bar*15))}%`}, difficulty >= bar && styles.filled]}></View>)}
      </View>
      <TouchableOpacity>
        <Text style={[styles.buttonCommon, styles.newGameButton]} >
          New Game
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.buttonCommon, styles.resumeButton]} >
          Resume
        </Text>
      </TouchableOpacity>

    </View>    
  )
};

export default LevelMenuCard;