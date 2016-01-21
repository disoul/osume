'use strict';
import { StyleSheet } from 'react-native';

const BackgroundColor = '#e91e63';

const topState = StyleSheet.create({ 
  container: {
    height: 100,
    //FIXME: use flex
    justifyContent: 'flex-start',
    backgroundColor: BackgroundColor,
  },
  avatar: {
    width: 80,
    height: 80, 
    margin: 10,
    //FIXME: shadow only be seen in android5.0+
    elevation: 5,
    borderRadius: 5,
    backgroundColor: BackgroundColor,
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
  username_block: {
    justifyContent: 'flex-start',
    maxWidth: 1000,
    backgroundColor: BackgroundColor,
  },
  username: {
    fontSize: 20,
    color: 'white',
  },
  country: {
    marginLeft: 3,
    width: 27,
    height: 12,
  },
  bottomColumn: {
    backgroundColor: BackgroundColor,
    flex: 1,
    alignItems: 'flex-end',
  },
  rank: {
    fontSize: 40,
    color: 'white',
  },
  dateinfo: {
    marginLeft: 5,
    fontSize: 12,
    color: 'white',
    marginBottom: 8,
  },
});

module.exports = topState;
