import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Styles, Metrics, Images, Colors } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import { replaceRoute, pushNewRoute } from '@actions/route';

class DashboardItem extends Component {
  render() {
    return (
      <View>
        {CommonWidgets.renderSpacer(18)}
        <View style={styles.container} >
          <TouchableOpacity onPress={() => this.props.pushNewRoute('campView')}>
            <Image style={styles.listImg} source={this.props.img} />
          </TouchableOpacity>
          <Text style={styles.descTitle}>
            { this.props.txtTitle }
          </Text>
          <Text style={styles.descPeriod}>
            { this.props.txtPeriod }
          </Text>
          {this.props.txtSchool !== '' &&
          (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Text style={styles.descDetail}>
                  { this.props.txtSchool }
                </Text>
              </View>
              <View>
                <Text style={styles.descPrice}>
                  { this.props.txtPrice }
                </Text>
              </View>
            </View>
          )}
        </View>
        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
      </View>
    );
  }
}

DashboardItem.propTypes = {
  txtTitle: React.PropTypes.string.isRequired,
  txtPeriod: React.PropTypes.string.isRequired,
  txtSchool: React.PropTypes.string.isRequired,
  txtPrice: React.PropTypes.string.isRequired,
};

DashboardItem.defaultProps = {
  txtTitle: 'Adidas ABCD',
  txtPeriod: "Top recruits from across the nation compete in one of the country's top showcases",
  txtSchool: 'University of Connecticut - Storrs, CT',
  txtPrice: '$199',
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItem);
