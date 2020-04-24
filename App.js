import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Provider as GameProvider} from './src/context/GameContext';
import Game from './src/screens/Game';

const navigator = createStackNavigator({
  Home: Game
}, 
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Sudoku"
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <GameProvider><App/></GameProvider>
};