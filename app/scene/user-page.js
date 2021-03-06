'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TopState from '../components/top-state';
import UserTab from '../components/user-tab';
import Styles from '../styles/index';
import StatusBarAndroid from 'react-native-android-statusbar';

class UserPage extends Component {
  render() {
    StatusBarAndroid.setHexColor('#c2185b');
    return (
        <View style={[ Styles.global.container, Styles.global.fill]}>
          <TopState userid={this.props.userid}/>
          <UserTab userid={this.props.userid} style={[ Styles.global.container,Styles.global.fill,{elevation: 4}]} />
        </View>
    );
  }
}

module.exports = UserPage;
