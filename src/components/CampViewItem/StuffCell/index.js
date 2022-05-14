import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';

import { Avatar } from 'react-native-elements';

class StuffCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointer: 0,
      imgs: [Images.imgMan1, Images.imgMan2, Images.imgMan3, Images.imgMan4, Images.imgMan5, Images.imgMan6, Images.imgMan7, Images.imgMan8, Images.imgMan9 ],
      Names: ["Crystal Adams", "Tonya Arlington", "Cynthia Broadus", "Tiffany Bynum", "Delly Calloway", "Michelle Devietro", "Sophia Gonzalez", "Cynthia Broadus", "Tiffany Bynum"],
      Adresses: ["Head Coach - Woman'BasketBall", "Head Coach - Woman'BasketBall", "Head Coach - Woman'BasketBall", "Head Coach - Woman'BasketBall", "Olympia, WA", "Scottsdale, AZ", "Baltimore, MD", "Atlanta, GA", "Los Angeles, CA"],
      States: ["University of Connecticut", "University of Maryland", "University of South Carolina", "University of Connecticut", "University of Maryland", "University of South Carolina", "University of South Carolina", "University of Connecticut", "University of Maryland"],
    };
  }
 
  render() {
    return (
        <View style={{flexDirection: 'column', paddingHorizontal: 12 }}>
          <View style={[styles.container, Styles.rowContainer, { marginVertical: 10 }]}>
            <View style={Styles.center}>
              {CommonWidgets.renderSizedAvatar(this.state.imgs[this.props.id.key], null, Metrics.reviewAvatarSize)}
            </View>

            <View style={{ width: 30 }} />

            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ ...Fonts.style.h6, color: Colors.brandPrimary }}>{this.state.Names[this.props.id.key]}</Text>
              <View>
                <Text style={{ ...Fonts.style.h6, color: Colors.textPrimary }}>{this.state.Adresses[this.props.id.key]}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ ...Fonts.style.h6, color:Colors.textPrimary  }}>{this.state.States[this.props.id.key]}</Text>
              </View>
              {CommonWidgets.renderSpacer(14)}
            </View>
          </View>
          {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
        </View>
    );
  }
}

StuffCell.propTypes = {
  imgPath: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  job: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
};

StuffCell.defaultProps = {
  imgPath: Images.rgThumbnail,
  name: 'All American',
  job: "Head-Coach: Women's Basketball",
  date: '3/25/17',
};


function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(StuffCell);
