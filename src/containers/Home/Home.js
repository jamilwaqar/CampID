import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, pushNewRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Images, Fonts, Icon } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import DashboardItem from '@components/DashboardItem';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader('Your Camps')}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('profileView'), Images.imgEarth)}
            <View style={{ width: 20 }} />
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('searchView'), 'search')} 
            </View>)} />

        <ScrollView>
          <ScrollView horizontal >
            <DashboardItem txtTitle="All American Skills Development" txtSchool="Univesity of Connecticut-Storrs, CT" txtPrice="$199" txtPeriod="June 21-27 2017" img={Images.myCamp1}/>
            <DashboardItem txtTitle="Ball Handling & Defense" txtSchool="Georgia Tech-Atlanta, GA" txtPrice="$99" txtPeriod="June 12-21 2017" img={Images.myCamp2} />
          </ScrollView>
          <ScrollView horizontal >
            <DashboardItem txtTitle="Ball Handling & Defense" txtSchool="Univesity of Connecticut-Storrs, CT" txtPrice="$132" txtPeriod="June 03-11 2017" img={Images.myCamp3}/>
            <DashboardItem txtTitle="All American Skills Development" txtSchool="Georgia Tech-Atlanta, GA" txtPrice="$249" txtPeriod="May 22-30 2017" img={Images.myCamp2} />
          </ScrollView>
        </ScrollView>
        {CommonWidgets.renderSpacer(160)}
        <View style={{flex: 9, flexDirection: 'row'}}>
          <View style={{flex:1, alignItems:'flex-end'}} >
            {CommonWidgets.renderImgBtn(()=>this.props.replaceRoute('addNewCamp'), {marginRight: 30},Images.imgAddBtn)}
          </View>
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
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
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
