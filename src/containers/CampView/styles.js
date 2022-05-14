import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

export default StyleSheet.create({
  bodyContainer: {
    flex: 5,
    alignItems: 'center',
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
});
