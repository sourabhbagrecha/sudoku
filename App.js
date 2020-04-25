import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Provider as GameProvider} from './src/context/GameContext';
import Game from './src/screens/Game';
import { Provider as ThemeProvider } from './src/context/ThemeContext';

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
  return <ThemeProvider>
    <GameProvider>
      <App/>
    </GameProvider>
  </ThemeProvider>
};