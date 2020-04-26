import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import levelMenuCardStyles from '../styles/components/levelMenuCard.styles';
import { Context as ThemeContext} from '../context/ThemeContext';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { Context as LevelContext} from '../context/LevelContext';
import { navigate } from '../NavigationRef';

function LevelMenuCard(props) {
  const {title, difficulty, pendingGame, navigation} = props;
  const { state: { currentTheme } } = useContext(ThemeContext);
  const { initializeNewGame } = useContext(LevelContext);
  const styles = levelMenuCardStyles(currentTheme);
  const handleNewGameClick = () => {
    console.log(`Initializing a new ${title} sudoku`);
    initializeNewGame({level: title});
  }
  const handleResumeGameClick = () => {
    console.log(`Resuming ${title} sudoku`);
    navigate("Game", {level: title})
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.levelLogo}>
        {[1,2,3,4,5].map(bar => <View key={bar} style={[styles.logoBar, {height: `${(20+(bar*15))}%`}, difficulty >= bar && styles.filled]}></View>)}
      </View>
      {
        pendingGame.timer ?
        <TouchableOpacity
          onPress={handleResumeGameClick}
        >
          <Text style={[styles.buttonCommon, styles.resumeButton]} >
            Resume
          </Text>
        </TouchableOpacity>
        : null
      }

      <TouchableOpacity 
        onPress={handleNewGameClick}
      >
        <Text style={[styles.buttonCommon, styles.newGameButton]} >
          New Game
        </Text>
      </TouchableOpacity>

    </View>    
  )
};

export default withNavigation(LevelMenuCard);