'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Styles from '../styles/index';


class TopState extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      rank: 9999999,
      id: null,
      country: null,
    };
    //FIXME: use props from parent
  }

  componentDidMount() {
    global.storage.load({
      key: 'defaultUser'  
    }).then( ret => {
      console.log('233');
      if (ret.id !== null){
        this.fetchDefaultUser(ret.id);
        console.log('233333');
      }
    });
  }

  fetchDefaultUser(userid) {
    global.storage.load({
      key: 'userState',
      id: userid,
      autoSync: true,
      syncInBackground: true,
    }).then( ret => {
      console.log(ret);
      this.setState({
        username: ret.username,
        rank: ret.pp_rank,
        id: userid,
        country: ret.country,
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
      return this.renderUserState();
    }
  }

  renderBlank() {
    //TODO
    return (<View></View>);
  }

  renderUserState() {
    return (
      <View style={Styles.global.container_row}>
        <Image
            source={{uri: 'https://a.ppy.sh/' + this.state.id}}
            style={Styles.topState.avatar}
        ></Image>
      </View>
    );
  }
}

module.exports = TopState;
