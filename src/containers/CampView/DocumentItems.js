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
import DocumentCell from '@components/CampViewItem/DocumentCell';
class DocumentItems extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{alignItems:"center" }}>
            <Image style={styles.serchBar} source={Images.serchBar} />
        </View>
        <ScrollView>
          <DocumentCell id={{key:0}} />
          <DocumentCell id={{key:1}} />
          <DocumentCell id={{key:2}} />
          <DocumentCell id={{key:3}} />
          <DocumentCell id={{key:4}} />
          <DocumentCell id={{key:5}} />
          <DocumentCell id={{key:6}} />
          <DocumentCell id={{key:7}} />
          <DocumentCell id={{key:8}} />
        </ScrollView>
      </View>
    );
  }
}

DocumentItems.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(DocumentItems);
