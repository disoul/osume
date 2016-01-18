'use strict';
import { StyleSheet } from 'react-native';

const topState = StyleSheet.create({ 
  container: {
    height: 100,
    //FIXME: use flex
    justifyContent: 'flex-start',
  },
  avatar: {
    flex: 1,
    width: 100,
    height: 100, 
  },
  leftView: {
    flex: 3,
  }

});

module.exports = topState;
