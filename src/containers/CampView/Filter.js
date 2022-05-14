import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import CheckBox from 'react-native-check-box'; // npm i react-native-check-box --save
import Display from 'react-native-display';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

import NavigationBar from 'react-native-navbar';
import { replaceRoute, popRoute } from '@actions/route';
import { setAvatarUri } from '@actions/globals';
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from '@containers/Authentication/styles';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable1: false,
      enable2: false,
    };
  }

  
  toggleCamp = () => {
    let toggle = !this.state.enable1;
    this.setState({ enable1: toggle });
  }
  toggleDocument = () => {
    let toggle = !this.state.enable2;
    this.setState({ enable2: toggle });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandSecondary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen} >
          {CommonWidgets.renderStatusBar('black')}
          <NavigationBar
            style={Styles.navBarStyle}
            tintColor={Colors.txtTitle}
            leftButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
            <View style={{ width: 20 }} />
            <Text style={[styles.descSubTitle, {color:"#ffffff" ,  fontFamily:'TitilliumWeb-Bold', fontSize: 19, top:-3}]}>
                { "Filter" }
            </Text> 
            </View>)} 
            rightButton={CommonWidgets.renderNavBarLeftButton(null, 'clear')} />
            
            {/* -----Avatar---- */}
          {CommonWidgets.renderSpacer(40)}
          {CommonWidgets.renderTextWithMargin(Fonts.style.h5, 'Registration Status')}
          {CommonWidgets.renderSpacer(22)}
          <View style={[styles.bodyContainer, { alignItems:"center"}]}>
            <View style={{width:Metrics.screenWidth - 40, height: Metrics.screenHeight * 0.63,}}>
              <View style={{ backgroundColor:"#DEDEDE", flexDirection:"column"}}>
                <CheckBox
                  style={{padding:10}}
                  onClick={() => this.toggleCamp()}
                  isChecked={false}
                  rightText={"Camp Ready"}
                  rightTextStyle={this.state.enable1 == true ? {fontSize:16, color:Colors.brandPrimary} : {fontSize:16, color:"#000000"}}
                  checkedImage={<Image style={{width:20, height:20}}
                                        resizeMode={'stretch'}
                                        source={Images.checked}/>}
                  unCheckedImage={<Image style={{width:20, height:20}}
                                        resizeMode={'stretch'}
                                        source={Images.unchecked}/>}/>
                
                  <Display enable={this.state.enable1} style={{paddingLeft: 60, paddingRight:20}}>
                    
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"Waiver"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"insurance"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"payment"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      
                      
                                          
                  </Display>

                  <CheckBox
                  style={{padding:10}}
                  onClick={() => this.toggleDocument()}
                  isChecked={false}
                  rightText={"Documents Needed"}
                  rightTextStyle={this.state.enable2 == true ? {fontSize:16, color:Colors.brandPrimary} : {fontSize:16, color:"#000000"}}
                  checkedImage={<Image style={{width:20, height:20}}
                                        resizeMode={'stretch'}
                                        source={Images.checked}/>}
                  unCheckedImage={<Image style={{width:20, height:20}}
                                        resizeMode={'stretch'}
                                        source={Images.unchecked}/>}/>
                
                  <Display enable={this.state.enable2} style={{paddingLeft: 60, paddingRight: 20, paddingBottom: 20}}>
                    
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"Waiver"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"insurance"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      <CheckBox
                      
                      onClick={(isChecked) => console.log("I am checked",isChecked)}
                      isChecked={false}
                      leftText={"payment"}
                      leftTextStyle={{fontSize:16, color:"#000000"}}
                      checkedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.checked}/>}
                      unCheckedImage={<Image style={{width:20, height:20}}
                                            resizeMode={'stretch'}
                                            source={Images.subunchecked}/>}/>
                      
                      
                                          
                  </Display>
              </View>
            </View>
            {CommonWidgets.renderSpacer(30)}
            {CommonWidgets.renderMaterialButton("Apply", Colors.brandPrimary, () => this.props.popRoute())}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Filter.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
