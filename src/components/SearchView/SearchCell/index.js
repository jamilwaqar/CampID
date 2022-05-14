import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';

import { Avatar } from 'react-native-elements';

class SearchCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointer: 0,
      imgs: [Images.imgMan6, Images.imgMan7, Images.imgMan8, Images.imgMan1, Images.imgMan2, Images.imgMan3, Images.imgMan4, Images.imgMan5, Images.imgMan9 ],
      Names: ["Crystal Adams", "Tonya Arlington", "Cynthia Broadus", "Tiffany Bynum", "Delly Calloway", "Michelle Devietro", "Sophia Gonzalez", "Cynthia Broadus", "Tiffany Bynum"],
      Adresses: ["Houston, TX", "New York, NY", "Atlanta, GA", "Los Angeles, CA", "Olympia, WA", "Scottsdale, AZ", "Baltimore, MD", "Atlanta, GA", "Los Angeles, CA"],
      States: [true, false, true, false, true, true, false, true, false],
    };
  }
  render() {
    return (
      <View style={{paddingHorizontal: 5}}>
        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
        {CommonWidgets.renderSpacer(20)}
        <View style={[styles.container, Styles.rowContainer,{paddingHorizontal: 10}]}>
          <View style={Styles.center}>
            <Image style={styles.image} source={this.state.imgs[this.props.id.key] } />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[Fonts.style.h6, { color: Colors.brandPrimary }]}>{this.props.name}</Text>
            {CommonWidgets.renderSpacer(3)}
            <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>{this.props.period}</Text>
            {CommonWidgets.renderSpacer(3)}
            <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>{this.props.school}</Text>
            {CommonWidgets.renderSpacer(3)}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                {CommonWidgets.renderSmallButton(this.props.price, Colors.brandPrimary, () => Alert.alert('sss'))}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rateText}>
                  {this.props.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {CommonWidgets.renderSpacer(20)}
      </View>
    );
  }
}

SearchCell.propTypes = {
  imgPath: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  period: React.PropTypes.string.isRequired,
  school: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  rating: React.PropTypes.string.isRequired,
};

SearchCell.defaultProps = {
  imgPath: 'https://facebook.github.io/react/img/logo_og.png',
  name: 'All American Skills Development',
  period: 'June 7 - 10 2017',
  school: 'University of Connecticut - Storrs, CT',
  price: '$99',
  rating: '9.5 rated',
};


function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(SearchCell);
