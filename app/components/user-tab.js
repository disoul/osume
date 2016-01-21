'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
} from 'react-native';
import Styles from '../styles/index';
import { Tab, TabLayout } from 'react-native-android-tablayout';

class UserTab extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      pagePosition: 0,
    };
  }

  componentDidMount() {
    this.setState({ pagePosition: 0}); 
  }

  render() {
    return (
      <View style={Styles.global.container}>
        <View
          style={Styles.userTab.tabLayout}
        >
          <TabLayout
            selectedTab={ this.state.pagePosition }
            onTabSelected={(e) => {
              const pagePosition = e.nativeEvent.position;
              this.setState({ 'pagePosition': pagePosition });
              this.viewPager.setPage(pagePosition);
            }}
            selectedTabIndicatorColor= "#64b5f6"
            style={{height: 35}}
          >
            <Tab 
              name="State"
              textColor="#ffffff"
            />
            <Tab 
              name="BP" 
              textColor="#ffffff"
            />
            <Tab 
              name="Events" 
              textColor="#ffffff"
            />
          </TabLayout>
        </View>
        <ViewPagerAndroid
          style={ {flex: 1} }
          ref={viewPager => { this.viewPager = viewPager; }}
          onPageSelected={(e) => {
            const pagePosition = e.nativeEvent.position;
            this.setState({ 'pagePosition': pagePosition });
            this.viewPager.setPage(pagePosition);
          } }>
          <View>
            <Text>Tab 1 content</Text>
          </View>
          <View>
            <Text>Tab 2 content</Text>
          </View>
          <View>
            <Text>Tab 3 content</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }

  setPagePosition(event) {
    const pagePosition = event.nativeEvent.position;
    this.setState({ 'pagePosition': pagePosition });
    this.viewPager.setPage(pagePosition);
  }

}

module.exports = UserTab;
