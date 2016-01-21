'use strict';
import { StyleSheet } from 'react-native';

const global = StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  container_column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textShadow: {
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 10,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
  }
});

module.exports = global;
