'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Styles from '../styles/index';


class StateDetail extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      accuracy: null,
      level: 0,
    };
  }

  componentDidMount() {
    if (this.props.userid) {
      this.fetchUser(this.props.userid);
    } else {
      global.storage.load({
        key: 'defaultUser'
      }).then( ret => {
        console.log('233');
        if (ret.id !== null){
          this.fetchUser(ret.id);
          console.log('233333');
        }
      });
    }
  }

  fetchUser(userid) {
    global.storage.load({
      key: 'userState',
      id: userid,
      autoSync: true,
      syncInBackground: true,
    }).then( ret => {
      console.log(ret);
      this.setState({
        accuracy: ret[0].accuracy,
        level: ret[0].level,
      });
    }).catch( err => {
      console.warn(err);
    });
  }

  render() {
    if (this.state.id === null) {
      return this.renderBlank();
    } else {
      console.log('show');
      return this.renderStateDetail();
    }
  }

  renderBlank() {
    //TODO
    return (<View><Text>Loading..</Text></View>);
  }

  renderStateDetail() {
    return (
      <View>
        <View style={Styles.stateDetail.column}>
          <Text>Level</Text>
        </View>
      </View>
    );
  }
}

module.exports = StateDetail;
