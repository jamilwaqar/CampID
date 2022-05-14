import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  Alert,
  Text,
  ScrollView,
} from 'react-native';

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
import Constants from '@src/constants';
import styles from './styles';
import Utils from '@src/utils';
import ReviewCell from '@components/CampViewItem/ReviewCell';


class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteFocus: false,
      coachFocus: false,
      administratorFocus: false,
      parentFocus: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ administratorFocus: false, parentFocus: false, athleteFocus: false, coachFocus: false });
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
        style={{ flex: 1, backgroundColor: Colors.brandSecondary }}
        automaticallyAdjustContentInsets={false}>
        <View style={{...Styles.fullScreen}}>
          {CommonWidgets.renderStatusBar('black')}
          <NavigationBar
            style={{...Styles.navBarStyle, height:60}}
            tintColor={Colors.brandSecondary}
            leftButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around', top:5 }}>
              {CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
              <View style={{ width: 12 }} />
              <View style={{ flexDirection: 'column', justifyContent: 'space-around', top: -9,}}>
                <Text style={[...styles.descSubTitle,{top: 0,  color: "#ffffff", fontFamily: 'TitilliumWeb-Bold', }]}>
                    {"Player Profile"}
                </Text>
                <Text style={[...styles.descSubTitle,{top: 0, fontSize: 12, color: "#ffffff", }]}>
                    { "Crystal Adams" }
                </Text> 
              </View>
              </View>)}
            rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'ellipsis-v')} />

          <View style={{...Styles.fullScreen,height: Metrics.screenHeight * 0.9, paddingHorizontal:8, paddingBottom:10}}>
              <View style={[styles.bodyContainer, {height: Metrics.screenHeight * 0.53}]}>
                {CommonWidgets.renderSpacer(15)}
                <View style={[{ }, Styles.center]}>
                  {CommonWidgets.renderText({ ...Fonts.style.h4, ...Fonts.style.semibold }, 'Christina Smith')}
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, 'HS Point Guard ')}
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.regular }, '| Saint Francis (GA) #1')}
                  </View>
                  {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, "Women's Basketball")}
                </View>
                {CommonWidgets.renderSpacer(29)}
                <View style={[{flexDirection:"row"}, Styles.center]}>
                  <View style={{alignItems:"flex-start"}}>
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, 'Height ')}
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, 'Weight ')}
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, 'Location ')}
                  </View>
                  <View style={{width:30}}/>
                  {CommonWidgets.renderAvatar(Images.imgMan6, () => this.showActionSheetMenu())}
                  <View style={{width:30}}/>
                  <View style={{alignItems:"flex-end"}}>
                    {CommonWidgets.renderText({ ...Fonts.style.h6, color: Colors.textPlaceholder }, "6'0")}
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, '168 lbs')}
                    {CommonWidgets.renderText({ ...Fonts.style.h6, ...Fonts.style.semibold }, 'Houston, TX')}
                  </View>
                </View>
                {CommonWidgets.renderSpacer(29)}
                <View style={[{  flexDirection: 'row' }, Styles.center]}>
                  {CommonWidgets.renderMaterialButton("Intermediate", Colors.textSecondary , null, 120, 30)}
                  <View style={{width:20}}/>
                  {CommonWidgets.renderMaterialButton("4-5 years", Colors.textSecondary, null, 100, 30)}
                </View>
                {CommonWidgets.renderSpacer(29)}
                <View style={Styles.center}>
                  {CommonWidgets.renderMaterialButton("Attendance At your Camps", Colors.brandPrimary, null)}
                </View>
                {CommonWidgets.renderSpacer(15)}
                <View style={[{}, Styles.center]}>
                  {CommonWidgets.renderMaterialButton("Contact via sportsID", Colors.brandPrimary, null)}
                </View>
              </View>
              {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
              <Text style={[Fonts.style.buttonText, { lineHeight:40, marginLeft: Metrics.defaultMargin, color: Colors.brandPrimary, textDecorationLine:"underline" }]}>
                {"Comments"}
              </Text>
              <ScrollView>
                <ReviewCell id={{key:7}} />
                <ReviewCell id={{key:6}} />
                <ReviewCell id={{key:5}} />
                <ReviewCell id={{key:3}} />
                <ReviewCell id={{key:1}} />
                <ReviewCell id={{key:2}} />
              </ScrollView>
          </View>
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

ProfileView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setAvatarUri: avatarUri => dispatch(setAvatarUri(avatarUri)),
  };
}

function mapStateToProps( state ) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
