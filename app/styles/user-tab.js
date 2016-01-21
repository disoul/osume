'use strict';
import { StyleSheet } from 'react-native';

const BackgroundColor = '#e91e63';

const userTab = StyleSheet.create({ 
  tabLayout: {
    backgroundColor: BackgroundColor,
    elevation: 3,
    marginBottom: 5,
  },
  tab: {
    borderColor: 'white',
  }
});

module.exports = userTab;
