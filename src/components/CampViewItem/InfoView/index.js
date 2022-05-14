import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import MapView from 'react-native-maps';
import { replaceRoute, pushNewRoute } from '@actions/route';

class InfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    };
  }
  render() {
    return (
      <View>
        {CommonWidgets.renderSpacer(15)}
        <View style={styles.container} >
          <TouchableOpacity>
            <Image style={styles.listImg} source={Images.myCamp1} />
          </TouchableOpacity>
          <View style={[styles.rowContainer, {height:86}]}>
            <View style={[styles.leftView, {height:80}]}>
              <Text style={styles.descTitle}>
                { this.props.txtTitle }
              </Text>

              <Text style={styles.descSubTitle}>
                { this.props.txtSubTitle }
              </Text>

              <Text style={styles.descPeriod}>
                { this.props.txtPeriod }
              </Text>
            </View>
            <View style={styles.middleGap} />
            <View style={[styles.rightView, {height:80}]}>
              <Image style={styles.rateBar} source={Images.rateBar}>
                <Text style={styles.rateText} onPress={this.props.onPress}>
                  {this.props.rate}
                </Text>
              </Image>
              <View style={styles.priceView}>
                <Text style={styles.descPrice}>
                  { this.props.txtPrice }
                </Text>
              </View>
              {/*{CommonWidgets.renderTextButton(I18n.t('RATE_CAMP'), styles.rateCampBtn, this.props.onPress)}*/}
            </View>
          </View>
        </View>

        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}

        <View style={styles.container} >
          <View style={styles.rowContainer}>
            <View style={styles.leftView}>
              <Text style={styles.stadium}>
                { this.props.txtStadium }
              </Text>

              <Text style={styles.university}>
                { this.props.txtUniversity }
              </Text>

              <Text style={styles.address}>
                { this.props.txtAddress }
              </Text>
            </View>
            <View style={styles.middleGap} />
            <View style={styles.rightView}>
              <MapView
                style={{ width: Metrics.rateBarWidth - 12, height: Metrics.rateBarHeight - 10 }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <MapView.Marker
                  coordinate={this.state.coordinate}
                />
              </MapView>
            </View>
          </View>
        </View>
        {CommonWidgets.renderSpacer(2, Colors.brandSecondary)}

        <View style={styles.container} >
          <View style={styles.rowContainer}>
            <View style={[...styles.leftView, { flex: 1, flexDirection: 'row', alignItems: 'center' }]}>
              
              <View style={styles.middleTextView}>
                <Text style={[styles.stadium, { marginLeft: 2, ...Fonts.style.h6 }]}>
                  { "320 athletes currently registered" }
                </Text>
                <Text style={[styles.university, { marginLeft: 2, ...Fonts.style.h7, color:Colors.textSecondary }]}>
                  { "23 athletes on the waitlist" }
                </Text>
              </View>
            </View> 

            <View style={styles.middleGap} />
            <View style={styles.rightView}>
              {CommonWidgets.renderMaterialButton(I18n.t('REGISTER'), Colors.brandPrimary, () => this.props.pushNewRoute('registerations'), Metrics.rateBarWidth + 10, 27)}
            </View>
          </View>
        </View>

        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
      </View>
    );
  }
}

InfoView.propTypes = {
  txtTitle: React.PropTypes.string.isRequired,
  txtSubTitle: React.PropTypes.string.isRequired,
  txtPeriod: React.PropTypes.string.isRequired,
  txtSchool: React.PropTypes.string.isRequired,
  txtPrice: React.PropTypes.string.isRequired,
};

InfoView.defaultProps = {
  txtTitle: "Women's Basketball",
  txtSubTitle: 'All American Skills Development',
  txtPeriod: 'June 21-27th 2017',
  txtSchool: 'University of Connecticut - Storrs, CT',
  txtPrice: '$199',
  rate: '9.0',
  txtStadium: 'Gampel Pavilion',
  txtUniversity: 'University of Connecticut',
  txtAddress: '2098 Hillside Rd, SSS, SSS 08232',
};

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoView);
