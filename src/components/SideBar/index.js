import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '@actions/drawer';
import { View, Text, Image, ScrollView } from 'react-native';
import { setSpinnerVisible } from '@actions/globals';
import { replaceRoute, popRoute, pushNewRoute } from '@actions/route';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import I18n from 'react-native-i18n';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';

class SideBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.heavyBorder }} >
        {CommonWidgets.renderStatusBar(Colors.status)}
        <View style={[styles.itemBar, { backgroundColor: Colors.brandPrimary, height: Metrics.sidebarItemHeight * 1.2}]}>
          {CommonWidgets.renderSpacer(50)}
          {CommonWidgets.renderTextButton('Christina Smith', styles.itemText, null)}
          {CommonWidgets.renderTextButton('Logged into CampID', [styles.itemText,{ ...Fonts.style.h6, fontStyle:"italic"}], null)}
        </View>
        <ScrollView>
        <View style={[styles.itemBar, { alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(47,47,47)' }]}>
          <View style={{ flex: 1 }}>
            <Image style={styles.sportsIDLogo} source={Images.sportsID} />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {CommonWidgets.renderTextButton(I18n.t('LAUNCH_SPORTS_ID'), styles.launchText, null)}
          </View>
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('EDIT_PROFILE'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('editProfile'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('CAMP_HISTORY'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('campHistory'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('DOCUMENT_UPLOADS'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('documentUpload'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('NOTIFICATIONS'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('notifications'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('SETTINGS'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('settings'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('PRIVACY_POLICY'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('privacyPolicy'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('TERMS_OF_USE'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('termsOfUse'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('CONTACT'), styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('contact'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton('Payment', styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('paymentView'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton('My profile', styles.itemText, () => { this.props.closeDrawer(); this.props.pushNewRoute('profileView'); })}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton('Log out', styles.itemText, () => { this.props.closeDrawer(); this.props.replaceRoute('login'); })}
        </View>
        </ScrollView>
      </View>
    );
  }
}

SideBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  setSpinnerVisible: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    closeDrawer: () => dispatch(closeDrawer()),
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
