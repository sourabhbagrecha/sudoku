import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
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

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 360,
    marginTop: 30,
    marginHorizontal: 20
  }
})

export default GameConsole
