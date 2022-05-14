import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
  },
  listImg: {
    height: Metrics.listImgHeight + 30,
    width: Metrics.screenWidth - Metrics.defaultPadding,
    flex: 1,
    resizeMode: 'stretch',
  },
  newsTitle: {
    ...Fonts.style.h5,
    color: Colors.brandPrimary,
  },
  newsDate: {
    width: Metrics.screenWidth / 4,
    height: Metrics.listImgHeight / 4.6,
    top: Metrics.listImgHeight - 8,
    left: Metrics.screenWidth - Metrics.defaultPadding - 106,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    opacity: 0.9,
    alignItems:"center"
  },
  newsDatetxt: {
    ...Fonts.style.h6,
    color: Colors.brandPrimary,
  },
  newsDetail: {
    ...Fonts.style.h7,
    marginRight: 20,
    color: Colors.textPrimary,
  },
  
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },
});
