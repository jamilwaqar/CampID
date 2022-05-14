import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

import NavigationBar from 'react-native-navbar';

import { replaceRoute, popRoute , pushNewRoute} from '@actions/route';
import { setAvatarUri } from '@actions/globals';
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from './styles';

class RegisterSignUpDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportFocus: false,
      campNameFocus: false,
      campAddressFocus: false,
      cityFocus: false,
      stateFocus: false,
      zipCodeFocus: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ administratorFocus: false, parentFocus: false, athleteFocus: false, coachFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }
  onTextInputFocus(value) {
    this.setState({
      sportFocus: false,
      campNameFocus: false,
      campAddressFocus: false,
      cityFocus: false,
      stateFocus: false,
      zipCodeFocus: false,
    });
    this.setState({ [`${value}Focus`]: true });
  }
  showActionSheetMenu() {
    this.ActionSheet.show();
  }
  onActionSheetMenu(index) {
    const options = {
      quality: 1.0,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    switch (index) {
      case 0:
        ImagePicker.launchCamera(options, (response) => {
          this.onImagePicker(response);
        });
        break;
      case 1:
        ImagePicker.launchImageLibrary(options, (response) => {
          this.onImagePicker(response);
        });
        break;
      default:
    }
  }

  onImagePicker(response) {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else if (response.uri !== undefined) {
      let source = '';
      if (Platform.OS === 'android') {
        source = { uri: response.uri };
      } else {
        source = { uri: response.uri.replace('file://', ''), isStatic: true };
      }
      ImageResizer.createResizedImage(source.uri, 400, 300, 'JPEG', 80)
        .then((resizedImageUri) => {
          this.props.setAvatarUri(resizedImageUri);
        }).catch((err) => {
          console.log(err);
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={{...Styles.fullScreen}} >
          {CommonWidgets.renderStatusBar('black')}
          <NavigationBar
            style={Styles.navBarStyle}
            title={CommonWidgets.renderNavBarHeader('Sign UP')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))} />
            
          <Image
            //resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source={Images.SignUpBg}/>
            {/* -----Avatar---- */}
            <View style={{...Styles.fullScreen, height: Metrics.screenHight * 0.6, alignItems:"center"}} >  
                <View style={[styles.signUp,{ height: Metrics.screenHeight * 0.75, alignItems:"flex-start"}]}>
                  {CommonWidgets.renderSpacer(150)}
                  <Text style={[Fonts.style.buttonText, { color: Colors.textPrimary }]}>
                      {"Camp Details"}
                  </Text>
                  {CommonWidgets.renderSpacer(50)}
                  <View
                    style={[Styles.textInputContainerStyle,
                    { borderColor: Utils.getTextInputBorderColor(this.state.sportFocus), alignItems:"center", flexDirection: 'row',width:Metrics.screenWidth * 0.6 }]}>
                    <TextInput
                      style={Styles.textInputStyle}
                      underlineColorAndroid={'transparent'}
                      placeholder={"Sport"}
                      placeholderTextColor={Colors.textPlaceholder}
                      multiline={false}
                      onFocus={() => this.onTextInputFocus('sport')} />
                    <Icon name="chevron-down" size={17} color={Colors.textPlaceholder} style={{left: -108, top: 0, backgroundColor:Colors.brandThird}} />
                  </View>

                  {CommonWidgets.renderSpacer(29)}

                  <View
                    style={[Styles.textInputContainerStyle,
                    { borderColor: Utils.getTextInputBorderColor(this.state.campNameFocus),flexDirection: 'row' }]}>
                    <TextInput
                      style={Styles.textInputStyle}
                      underlineColorAndroid={'transparent'}
                      placeholder={"Camp Name"}
                      placeholderTextColor={Colors.textPlaceholder}
                      multiline={false}
                      onFocus={() => this.onTextInputFocus('campName')} />
                  </View>

                  {CommonWidgets.renderSpacer(29)}

                  <View
                    style={[Styles.textInputContainerStyle,
                    { borderColor: Utils.getTextInputBorderColor(this.state.campAddressFocus),flexDirection: 'row' }]}>
                    <TextInput
                      style={Styles.textInputStyle}
                      underlineColorAndroid={'transparent'}
                      placeholder={"Camp Address"}
                      placeholderTextColor={Colors.textPlaceholder}
                      multiline={false}
                      onFocus={() => this.onTextInputFocus('campAdress')} />
                  </View>

                  {CommonWidgets.renderSpacer(29)}
                  <View style={{flexDirection : "row"}}>
                    <View
                      style={[Styles.textInputContainerStyle,
                      { borderColor: Utils.getTextInputBorderColor(this.state.cityFocus),flexDirection: 'row', width:Metrics.screenWidth * 0.5 }]}>
                      <TextInput
                        style={Styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder={"City"}
                        placeholderTextColor={Colors.textPlaceholder}
                        multiline={false}
                        onFocus={() => this.onTextInputFocus('city')} />
                    </View>

                    <View style={{width: 10}}/>

                    <View
                      style={[Styles.textInputContainerStyle,
                      { borderColor: Utils.getTextInputBorderColor(this.state.stateFocus),alignItems:"center", flexDirection: 'row' , width:Metrics.screenWidth * 0.25}]}>
                      <TextInput
                        style={Styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder={"State"}
                        placeholderTextColor={Colors.textPlaceholder}
                        multiline={false}
                        onFocus={() => this.onTextInputFocus('state')} />
                      <Icon name="chevron-down" size={17} color={Colors.textPlaceholder} style={{left: -238, top: 0, backgroundColor:Colors.brandThird}} />
                    </View>
                    
                  </View>
                  {CommonWidgets.renderSpacer(29)}
                  <View
                    style={[Styles.textInputContainerStyle,
                    { borderColor: Utils.getTextInputBorderColor(this.state.zipCodeFocus),flexDirection: 'row', width:Metrics.screenWidth * 0.34 }]}>
                    <TextInput
                      style={Styles.textInputStyle}
                      underlineColorAndroid={'transparent'}
                      placeholder={"zip Code"}
                      placeholderTextColor={Colors.textPlaceholder}
                      multiline={false}
                      onFocus={() => this.onTextInputFocus('zipCode')} />
                  </View>
              </View>
          </View>
          {CommonWidgets.renderSpacer(10)}
          <View style={{ flex: 9, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {CommonWidgets.renderImgBtn(() => this.props.popRoute(), { left: Metrics.bottomBtnMargin }, Images.imgLeftBtn)}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }} >
                {CommonWidgets.renderImgBtn(() => this.props.pushNewRoute('registerSkill'), { marginRight: Metrics.bottomBtnMargin }, Images.imgRightBtn)}
              </View>
          </View>
          <View style={{ flex: 5 }} />
          
          <ActionSheet
            ref={(as) => { this.ActionSheet = as; }}
            options={Constants.IP_BUTTONS}
            cancelButtonIndex={Constants.IP_BUTTONS.length - 1}
            onPress={this.onActionSheetMenu.bind(this)}
            tintColor={Colors.textPrimary} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

RegisterSignUpDetail.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setAvatarUri: avatarUri => dispatch(setAvatarUri(avatarUri)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSignUpDetail);
