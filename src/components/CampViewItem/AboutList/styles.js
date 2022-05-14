import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: 300,
    paddingHorizontal: Metrics.bottomBtnMargin,
    //top: -100,
    alignItems:"flex-end",
  },
  listImg: {
    height: Metrics.listImgHeight - 200,
    width: Metrics.screenWidth - Metrics.defaultPadding,
    flex: 1,
    resizeMode: 'contain',
    top: -55,
  },
  stadium: {
    ...Fonts.style.h6,
    ...Fonts.style.semibold,
    color: Colors.textPrimary,
  },
  university: {
    ...Fonts.style.h7,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  middleTextView: {
    alignItems: 'flex-start',
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    top:5,
  },
  itemImg: {
    height: Metrics.screenWidth / 8,
    resizeMode: 'contain',
  },
  item: {
    alignItems: "center",
    width: (Metrics.screenWidth - 2 * Metrics.bottomBtnMargin) / 4,
  },
});
