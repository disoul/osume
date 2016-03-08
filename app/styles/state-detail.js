'use strict';
import { StyleSheet } from 'react-native';

const BackgroundColor = '#e91e63';

const stateDetail = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  column: {
    height: 20,
    flexDirection: 'row',
    margin: 5,
    marginLeft: 18,
    marginRight: 18,
  },
  bar_container: {
    width: 70,
    marginLeft: 6,
    height: 18,
    backgroundColor: '#ff6666',
  }
});

module.exports = stateDetail;
