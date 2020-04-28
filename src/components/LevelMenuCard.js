import React, { useContext } from 'react';
import { View, Button, FlatList } from 'react-native';
import levelMenuCardStyles from '../styles/components/levelMenuCard.styles';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { navigate } from '../NavigationRef';
import { Context as LevelContext } from '../context/LevelContext';
import { Context as ThemeContext } from '../context/ThemeContext';
import { Context as RecordContext } from '../context/RecordContext';
import Record from './Record';

function LevelMenuCard(props) {
  const { title, difficulty, pendingGame, navigation } = props;
  const { state: { currentTheme } } = useContext(ThemeContext);
  const { initializeNewGame } = useContext(LevelContext);
  const { state: { records } } = useContext(RecordContext)
  const styles = levelMenuCardStyles(currentTheme);
  const handleNewGameClick = () => {
    initializeNewGame({level: title});
  };
  const handleResumeGameClick = () => {
    navigate("Game", {level: title})
  };
  const recordsList = records.filter(r => r.level === title).sort((a, b) => a.time - b.time);
  return (
    <View style={styles.main}>
      <View style={[styles.intro, styles.cardCommon]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.levelLogo}>
          {[1,2,3,4,5].map(bar => <View key={bar} style={[styles.logoBar, {height: `${(20+(bar*15))}%`}, difficulty >= bar && styles.filled]}></View>)}
        </View>
        {
          pendingGame.puzzle ?
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
      <View style={[styles.records, styles.cardCommon]}>
        <Text style={styles.titleSecondary}>Records: </Text>
        {
          recordsList.length > 0 ?
          <FlatList
            keyExtractor={item => `${item.date}`}
            data={recordsList}
            renderItem={({item, index}) => <Record {...item} index={index} />}
          />:
          <Text style={styles.bodyText}>No records</Text>
        }
      </View> 
    </View>  
  )
};

export default withNavigation(LevelMenuCard);