import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context as ThemeContext } from '../context/ThemeContext';
import recordStyles from '../styles/components/record.styles';
import moment from 'moment';

function Record(props) {
  const {date, time, level, index} = props
  const { state: { currentTheme } } = useContext(ThemeContext);
  const styles = recordStyles(currentTheme);

  return (
    <View style={styles.main}>
      <Text style={styles.dateText}>{index+1}. {"   "}{moment(date).format("D MMM YYYY, h:mm A")}</Text>
      <Text style={styles.timeText}>{Math.floor(time/60) > 0 ? `${Math.floor(time/60)}M`: null} {time%60}S</Text>
    </View>
  )
};

export default Record;
