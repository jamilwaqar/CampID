import { StyleSheet, Platform } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  topBar: {
    justifyContent: 'center',
    paddingLeft: Metrics.defaultMargin,
    height: Metrics.sidebarItemHeight,
    backgroundColor: Colors.brandPrimary },
  itemBar: {
    justifyContent: 'center',
    height: Metrics.sidebarItemHeight * 0.6,
  },
  itemText: {
    ...Fonts.style.h5,
    marginLeft: Metrics.defaultMargin,
    color: Colors.textTitle,
  },
  launchText: {
    ...Fonts.style.h6,
    color: Colors.txtYellow,
    marginRight: Metrics.defaultMargin - 10,
  },
  sportsIDLogo: {
    resizeMode: 'contain',
    marginLeft: Metrics.defaultMargin,
    height: Metrics.sidebarItemHeight / 2.5,
    width: Metrics.sidebarItemHeight / 2.5 * 245 / 42,
    justifyContent: 'flex-start',
  },
});
