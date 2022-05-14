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
import Utils from '@src/utils';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Attendance from './Attendance';;

class CampAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Focus0: true,
      Focus1: false,
      Focus2: false,
      Focus3: false,
      Focus4: false,
      Focus5: false,
      Focus6: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ Focus0: false, Focus1: false, Focus2: false, Focus3: false, Focus4: false, Focus5: false, Focus6: false });
    this.setState({ [`Focus${value}`]: true });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={{...Styles.navBarStyle, height:60}}
          tintColor={Colors.brandSecondary}
          leftButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around', top:5 }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
            <View style={{ width: 12 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', top: -9,}}>
              <Text style={[...styles.descSubTitle,{top: 0,  color: "#ffffff", fontFamily: 'TitilliumWeb-Bold', }]}>
                  {"Camp Attendance"}
              </Text>
              <Text style={[...styles.descSubTitle,{top: 0, fontSize: 12, color: "#ffffff", }]}>
                  { "All American Skill Development" }
              </Text> 
            </View>
            </View>)}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around', top: -5 }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('filter'), Images.downArrow)}
            </View>)} />
          {CommonWidgets.renderSpacer(20)}
        <View style={[styles.container, { height: Metrics.screenHeight - 50, alignItems: 'center',}]}>
          <View style={{...Styles.container, alignItems: "center", paddingHorizontal:0}}>
            <Text style={Fonts.style.h4}>
              {"Week 1"}
            </Text>
            {CommonWidgets.renderSpacer(20)}
            <View style={Styles.rowContainer}>
              { CommonWidgets.renderAttendanceTabItem(I18n.t('MON'), Utils.getNormalBtnBackcolor(this.state.Focus0), () => this.onBtnFocus('0')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('TUE'), Utils.getNormalBtnBackcolor(this.state.Focus1), () => this.onBtnFocus('1')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('WED'), Utils.getNormalBtnBackcolor(this.state.Focus2), () => this.onBtnFocus('2')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('THU'), Utils.getNormalBtnBackcolor(this.state.Focus3), () => this.onBtnFocus('3')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('FRI'), Utils.getNormalBtnBackcolor(this.state.Focus4), () => this.onBtnFocus('4')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('SAT'), Utils.getNormalBtnBackcolor(this.state.Focus5), () => this.onBtnFocus('5')) }
              { CommonWidgets.renderAttendanceTabItem(I18n.t('SUN'), Utils.getNormalBtnBackcolor(this.state.Focus6), () => this.onBtnFocus('6')) }
            </View>
            <View style={[styles.container, { height: Metrics.screenHeight - 0, alignItems: 'center',paddingHorizontal:0}]}>
              <Attendance />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

CampAttendance.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CampAttendance);
