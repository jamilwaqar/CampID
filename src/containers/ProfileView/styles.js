import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  bodyContainer: {
    alignItems: 'center',
    backgroundColor: Colors.brandSecondary
  },
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
  serchBar: {
    width: Metrics.screenWidth - 30,
    height: Metrics.screenHeight/14,
    resizeMode: 'contain',
  },
  descSubTitle: {
    ...Fonts.style.h4,
    color: Colors.textTitle,
    top: -6,
  },
  logoImage: {
    resizeMode: 'stretch',
    top: 0,
    left: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * (313.0 / 1135.0),
  },

  forgotText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textThird,
    fontSize: Fonts.size.h4,
  },

  forgotTextStyle: {
    width: Metrics.buttonWidth,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textPrimary,
    letterSpacing: 1,
    includeFontPadding: true,
  },
  forgotPwdContainer: {
    marginTop: 10,
    padding: 0,
    width: Metrics.buttonWidth,
    alignItems: 'flex-end',
  },
  orContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  bottomAreaLogin: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight * (137 / 1135.0),
  },
  bottomAreaRegister: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight / 10,
  },
});
