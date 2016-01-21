'use strict';
import { StyleSheet } from 'react-native';

const BackgroundColor = '#e91e63';

const userTab = StyleSheet.create({ 
  tabLayout: {
    backgroundColor: BackgroundColor,
    elevation: 4,
    height: 35,
  },
  tab: {
    borderColor: 'white',
  }
});

module.exports = userTab;
