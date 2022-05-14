import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts,Images, Icon } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import AttendanceCell from '@components/CampViewItem/AttendanceCell';
class Attendance extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white',alignItems:"center", paddingHorizontal: 10, paddingBottom:20 }}>
        <View style={{alignItems:"center" }}>
            <Image style={styles.serchBar} source={Images.serchBar} />
        </View>
        <ScrollView >
          <AttendanceCell id={{key:0}} />
          <AttendanceCell id={{key:1}} />
          <AttendanceCell id={{key:2}} />
          <AttendanceCell id={{key:3}} />
          <AttendanceCell id={{key:4}} />
          <AttendanceCell id={{key:5}} />
          <AttendanceCell id={{key:6}} />
          <AttendanceCell id={{key:7}} />
          <AttendanceCell id={{key:8}} />
        </ScrollView>
      </View>
    );
  }
}

Attendance.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
