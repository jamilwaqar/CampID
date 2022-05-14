import { Text, View, Platform, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Gallery from './Gallery';//react-native-gallery';
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

class GalleryPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos1: [Images.gallery1, Images.gallery2, Images.gallery2, Images.gallery1, Images.gallery3, Images.gallery4, Images.gallery4, Images.gallery3, Images.gallery1, Images.gallery3,  ],
      photos2: [Images.gallery3, Images.gallery4, Images.gallery4, Images.gallery3, Images.gallery1, Images.gallery2, Images.gallery2, Images.gallery1, Images.gallery1, Images.gallery3,  ],
      photos3: [Images.gallery3, Images.gallery4, Images.gallery4, Images.gallery3, Images.gallery1, Images.gallery2, Images.gallery2, Images.gallery1, Images.gallery1, Images.gallery3,  ],
        
    };
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
                  {"2017 Awards"}
              </Text>
              <Text style={[...styles.descSubTitle,{top: 0, fontSize: 12, color: "#ffffff", }]}>
                  { "13 photos/Videos" }
              </Text> 
            </View>
            </View>)}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('filter'), 'plus')}
            <View style={{ width: 20 }} />
            {CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'ellipsis-v')} 
            </View>)} />
        {CommonWidgets.renderSpacer(25)}
        <ScrollView>
            <View style={{flex: 1, alignItems:"center"}}>
              <View style={{flex: 5, flexDirection:"row"}}>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery2}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery3}/>
                </TouchableOpacity>
              </View>
              {CommonWidgets.renderSpacer(25)}
              <View style={{flex: 5, flexDirection:"row"}}>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery2}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery3}/>
                </TouchableOpacity>
              </View>
              {CommonWidgets.renderSpacer(25)}
              <View style={{flex: 5, flexDirection:"row"}}>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery2}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery3}/>
                </TouchableOpacity>
              </View>
              {CommonWidgets.renderSpacer(25)}
              <View style={{flex: 5, flexDirection:"row"}}>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery2}/>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery3}/>
                </TouchableOpacity>
              </View>
              {CommonWidgets.renderSpacer(25)}
              <View style={{flex: 5, flexDirection:"row"}}>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      </View>
    );
  }
}

GalleryPageTwo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageTwo);
