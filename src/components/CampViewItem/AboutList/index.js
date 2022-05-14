import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import { replaceRoute, pushNewRoute } from '@actions/route';

class AboutList extends Component {
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
      
      <View >
        <View style={styles.middleTextView}>
          <Text style={[styles.stadium, { marginLeft: 2, ...Fonts.style.h5 }]}>
            { "About" }
          </Text>
          <Text style={[styles.university, { marginLeft: 2, ...Fonts.style.h7, color:Colors.textPrimary }]}>
            { I18n.t('About_Detail') }
          </Text>
        </View>
        <View style={styles.listContainer} >
          <View>
            <Image style={styles.listImg} source={Images.imgListBg} >
              {CommonWidgets.renderSpacer(170)}
              <View style={[{flexDirection:"row", flex: 1}]}>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('schedulePage')}>
                    <Image style={styles.itemImg} source={Images.item1} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('campAttendance')}>
                    <Image style={styles.itemImg} source={Images.item2} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('staff')}>
                    <Image style={styles.itemImg} source={Images.item3} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('gallery')}>
                    <Image style={styles.itemImg} source={Images.item4} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[{flexDirection:"row", flex: 1, top:-20}]}>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('news')}>
                    <Image style={styles.itemImg} source={Images.item5} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('documents')}>
                    <Image style={styles.itemImg} source={Images.item6} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('staff')}>
                    <Image style={styles.itemImg} source={Images.item7} />
                  </TouchableOpacity>
                </View>
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.props.pushNewRoute('staff')}>
                    <Image style={styles.itemImg} source={Images.item8} />
                  </TouchableOpacity>
                </View>
              </View>
            </Image>
          </View>
        </View>
      </View>
      
    );
  }
}

AboutList.propTypes = {
  txtTitle: React.PropTypes.string.isRequired,
};

AboutList.defaultProps = {
  txtTitle: "Women's Basketball",
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutList);