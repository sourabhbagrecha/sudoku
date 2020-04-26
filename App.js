import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Provider as GameProvider} from './src/context/GameContext';
import Game from './src/screens/Game';
import { Provider as ThemeProvider } from './src/context/ThemeContext';
import Menu from './src/screens/Menu';

const navigator = createStackNavigator({
  Home: Menu,
  Game
}, 
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Sudoku"
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <ThemeProvider>
    <GameProvider>
      <App/>
    </GameProvider>
  </ThemeProvider>
};