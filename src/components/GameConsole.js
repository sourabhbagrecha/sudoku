import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Dimensions } from 'react-native'
import ConsoleButton from './ConsoleButton'

function GameConsole(props) {
  const {nums} = props;
  return (
    <View style={styles.main}>
      {
        nums.map(num => <ConsoleButton key={num.num} {...num}/>)
      }
    </View>
  )
};
const {height, width} = Dimensions.get("window");
const rem = height/770;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 30*rem,
    justifyContent: "space-evenly"
  }
})

export default GameConsole
