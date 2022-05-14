import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
  },
  listImg: {
    height: Metrics.listImgHeight,
    width: Metrics.screenWidth - Metrics.defaultPadding,
    flex: 1,
    resizeMode: 'stretch',
  },
  descTitle: {
    ...Fonts.style.h5,
    color: Colors.brandPrimary,
  },
  descPeriod: {
    ...Fonts.style.h5,
    color: Colors.textPrimary,
  },
  descDetail: {
    ...Fonts.style.h6,
    marginRight: 20,
    color: Colors.textSecondary,
  },
  descPrice: {
    ...Fonts.style.h2,
    letterSpacing: 0.5,
    marginLeft: 20,
    color: Colors.brandPrimary,
  },
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },
});
