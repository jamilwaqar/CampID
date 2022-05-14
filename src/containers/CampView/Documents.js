import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, popRoute, pushNewRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Reviews from './Reviews';
import DocumentItems from './DocumentItems';

class Documents extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={{...Styles.navBarStyle, height:53}}
          tintColor={Colors.brandSecondary}
          leftButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
            <View style={{ width: 20 }} />
            <Text style={styles.descSubTitle}>
                { "Documents" }
            </Text> 
            </View>)}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('filter'), Images.downArrow)}
            <View style={{ width: 20 }} />
            {CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'ellipsis-v')} 
            </View>)} />

        <View>
          <ScrollView>
          <ScrollableTabView 
              renderTabBar={() => <DefaultTabBar />}
              tabBarActiveTextColor={Colors.brandPrimary}
              tabBarInactiveTextColor={Colors.textSecondary}
              tabBarUnderlineStyle={{ backgroundColor: Colors.brandPrimary }}>
            <DocumentItems tabLabel="Registered">project</DocumentItems>
            <Reviews tabLabel="Waitlist">projectWaitlist</Reviews>
          </ScrollableTabView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

Documents.propTypes = {
  txtNavTitle: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    txtNavTitle:"All American Skills Development",
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

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
