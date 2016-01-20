'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TopState from '../components/top-state';
import Styles from '../styles/index';
import StatusBarAndroid from 'react-native-android-statusbar';

class UserPage extends Component {
  render() {
    StatusBarAndroid.setHexColor('#c2185b');
    return (
        <View style={[ Styles.global.container, Styles.global.fill]}>
          <TopState style={[ Styles.global.container,Styles.global.fill ]} />
        </View>
    );
  }
}

module.exports = UserPage;
