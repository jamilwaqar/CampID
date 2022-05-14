import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Calendar   from "react-native-calendar-component";
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

class Profile extends Component {
  constructor(props) {
        super(props);
 
        this.state = {
            date: new Date()
        };
    }
 
    handleNextButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() + 1);
        this.setState({
            date
        });
    }
 
    handlePrevButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() - 1);
        this.setState({
            date
        });
    }
 
    handleDateSelect(date) {
        alert(`clicked: ${this.state.date.toString()}`);
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
                  {"Schedule"}
              </Text>
              <Text style={[...styles.descSubTitle,{top: 0, fontSize: 12, color: "#ffffff", }]}>
                  { "All American Skill Development" }
              </Text> 
            </View>
            </View>)}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'ellipsis-v')} />

        <ScrollView>
          <Calendar
                date={this.state.date}
                onPrevButtonPress={() => this.handlePrevButtonPress()}
                onNextButtonPress={() => this.handleNextButtonPress()}
                onDateSelect={(date) => this.handleDateSelect(date)} />
          
        </ScrollView>
      </View>
    );
  }
}

Profile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
