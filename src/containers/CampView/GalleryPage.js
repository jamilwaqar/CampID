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

class GalleryPage extends Component {
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
                  {"Gallery"}
              </Text>
              <Text style={[...styles.descSubTitle,{top: 0, fontSize: 12, color: "#ffffff", }]}>
                  { "3 Albums" }
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
                {/*<Gallery
                style={{flex: 1, backgroundColor: 'black', width:344, height:234}}
                images={[
                  'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
                  'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
                  'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
                ]}
              />*/}
                <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => this.props.pushNewRoute('galleryOne')}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery1}/>
                  <Text style={{...Fonts.style.h7, color: Colors.brandPrimary}}>
                    {"2017 All Star Game"}
                  </Text>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => this.props.pushNewRoute('galleryTwo')}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery2}/>
                    
                  <Text style={{...Fonts.style.h7, color: Colors.brandPrimary}}>
                    {"2017 Awards"}
                  </Text>
                </TouchableOpacity>
                <View style={{ width:4}}/>
                <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => this.props.pushNewRoute('galleryThree')}>
                  <Image
                    style={{width: (Metrics.screenWidth - 30) / 3, height: Metrics.screenWidth/5, borderRadius:4}}
                    source={Images.gallery3}/>
                  <Text style={{...Fonts.style.h7, color: Colors.brandPrimary}}>
                    {"Training Vidios"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      </View>
    );
  }
}

GalleryPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
