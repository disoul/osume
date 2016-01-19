'use strict';
import { StyleSheet } from 'react-native';

const topState = StyleSheet.create({ 
  container: {
    height: 100,
    //FIXME: use flex
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 80,
    height: 80, 
    margin: 10,
    //FIXME: shadow only be seen in android5.0+
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  avatar_img: {
    width: 80,
    height: 80, 
    borderRadius: 5,
  },
  leftView: {
    flex: 1,
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  username: {
    fontSize: 20,
  },
  country: {
    marginLeft: 10,
    width: 10,
    height: 10,
  },
  rank: {
    fontSize: 40,
  }
});

module.exports = topState;
