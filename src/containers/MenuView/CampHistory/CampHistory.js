import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import DashboardItem from '@components/DashboardItem';
import CampHistoryCell from '@components/MenuView/CampHistoryCell';

class CampHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('CAMP_HISTORY'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => {}, 'menu')} />

        <ScrollView>
          <CampHistoryCell onPress={() => this.props.pushNewRoute('campHistoryDetail')} />
          <CampHistoryCell onPress={() => this.props.pushNewRoute('campHistoryDetail')} />
          <CampHistoryCell onPress={() => this.props.pushNewRoute('campHistoryDetail')} />
        </ScrollView>
      </View>
    );
  }
}

CampHistory.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampHistory);
