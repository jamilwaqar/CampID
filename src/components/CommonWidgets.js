import React from 'react';
import {
  Platform,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import { MKButton, MKSwitch, MKCheckbox } from 'react-native-material-kit';

import { Metrics, Styles, Icons, Colors, Fonts, Images } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';

const CommonWidgets = {
  renderStatusBar(color) {
    return (
      (Platform.OS === 'android')
      ?
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
      :
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
    );
  },

  renderNavBarHeader(headerText, onPress = null) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.center}>
          <Text
            style={[Fonts.style.h3,
              { textAlign: 'center',
                width: Metrics.screenWidth * 0.7,
                color: Colors.textTitle }]}
            numberOfLines={1}>
            {headerText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderDivider(size = 2) {
    return (
      <View style={{ height: size, width: Metrics.screenWidth, backgroundColor: Colors.textSecondary }} />
    );
  },

  renderSpacer(count, bkColor) {
    if (bkColor === undefined) bkColor = 'transparent';
    return (
      <View style={{ backgroundColor: bkColor, height: (Metrics.screenHeight * (count / 1135.0)) }} />
    );
  },

  renderIconLabel(imgPath = Images.pdf, text, onPress) {
    let _src = { uri: imgPath };
    if (!isNaN(imgPath)) { _src = imgPath; } // require('Avatar')
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.rowContainer}>
          <Image style={{ resizeMode: 'stretch' }} source={imgPath} />
          <Text style={{ ...Fonts.style.h4, color: Colors.brandPrimary }}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderNormalButton(text, color = Colors.brandPrimary, onPress, textStyle = Fonts.style.buttonText) {
    if(text == "Beginner" || text == "intermediate" || text == "Novice"){
      return (
      <TouchableOpacity onPress={onPress}>
        <View style={{...Styles.normalButton, paddingHorizontal: 13, marginHorizontal: 5}} backgroundColor={color} borderRadius={13}>
          <Text style={textStyle}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.normalButton} backgroundColor={color} borderRadius={13}>
          <Text style={textStyle}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderAttendanceTabItem(text, color = Colors.brandPrimary, onPress, textStyle = Fonts.style.buttonText) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{...Styles.normalButton,width: Metrics.screenWidth / 7 - 4, height: Metrics.screenHeight / 18,  paddingHorizontal: 8, marginHorizontal: 1}} backgroundColor={color} borderRadius={9}>
          <Text style={{...textStyle, fontSize: 15}}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderSmallButton(text, color = Colors.brandPrimary, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.smallButton} backgroundColor={color} borderRadius={13}>
          <Text style={Fonts.style.buttonText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderMaterialButton(text, color = Colors.brandPrimary, onPress, _width, _height, _fontSize) {
    let _style;
    if (_width === undefined) { _style = Styles.button; } else { _style = [Styles.button, { width: _width, marginLeft: 4 }]; }
    if (_height === undefined) { _style = _style; } else { _style = [_style, { height: _height }]; }
    let _textStyle;
    if (_fontSize === undefined) { _textStyle = Fonts.style.buttonText; } else { _textStyle = [Fonts.style.buttonText, {fontSize: _fontSize}]; }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={_style} backgroundColor={color} borderRadius={7}>
          <Text style={text == "Registrations" ? [_textStyle, {fontSize: 14}] : _textStyle}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderRateBtn(text, bClicked, onPress, _width, _key) {
    let _style;
    let color = Colors.brandPrimary,
      txtColor = 'white',
      borderColor = Colors.brandPrimary;
    if (bClicked === false) {
      color = 'transparent';
      txtColor = borderColor = Colors.rateBtnDisabled;
    }

    if (_width === undefined) { _style = Styles.button; } else { _style = [Styles.button, { width: _width - 5 }]; }
    return (
      <TouchableOpacity key={_key} onPress={onPress}>
        <View style={Styles.rowContainer}>
          <View style={_style} borderColor={borderColor} borderWidth={1} backgroundColor={color} borderRadius={7}>
            <Text style={{ ...Fonts.style.buttonText, color: txtColor }}>
              {text}
            </Text>
          </View>
          <View style={{ width: 5 }} />
        </View>
      </TouchableOpacity>
    );
  },

  renderTextButton(text, _style, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[Fonts.style.hyperBottomText, _style]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
  renderRightButton(text, _style, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.center}>
          <Text
            style={[Fonts.style.h2,
              { textAlign: 'right',

                color: Colors.textTitle }]}
            numberOfLines={1}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderAddButton(text, color, onPress) {
    return (
      <TouchableOpacity
        style={[Styles.center,
          { width: Metrics.screenWidth * 0.15, backgroundColor: color, position: 'absolute', right: 0, bottom: 0, borderRadius: 3 }]}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },

  renderCloseButton(onPress) {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: Platform.OS === 'android' ? 25 : 30 }}
        onPress={onPress}>
        <Icon name="times" size={20} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },

  renderBigText(text) {
    return (
      <Text style={[Fonts.style.h3, Styles.txtLeftMargin]}>
        {text}
      </Text>
    );
  },
  renderText(style, text) {
    return (
      <Text style={style}>
        {text}
      </Text>
    );
  },
  renderTextWithMargin(style, text) {
    return (
      <Text style={[style, { marginHorizontal: Metrics.textLeftMargin }]}>
        {text}
      </Text>
    );
  },

  renderAvatar(imgUri, onPress, small) {
    let _src = { uri: imgUri };
    if (!isNaN(imgUri)) { _src = imgUri; } // require('Avatar')1
    let _style;
    if (small === undefined)
      {_style = styles.imgAvatar;}
    else
      {_style = styles.smallAvatar;}
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={_style}
          source={_src} />
      </TouchableOpacity>
    );
  },
  renderScheduleTabItem(title, bClicked = false, onPress) {
    return (
      bClicked === false ?
      (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ ...Fonts.style.h4, color: Colors.textPrimary, marginRight: Metrics.scheduleTabMargin }}>{title}</Text>
        </TouchableOpacity>
      )
      :
      (
        <TouchableOpacity onPress={onPress}>
          <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, marginRight: Metrics.scheduleTabMargin }}>
            <Text style={{ ...Fonts.style.h4, color: Colors.brandPrimary }}>{title}</Text>
            <Icon name={'sort-desc'} size={30} style={{ backgroundColor: 'transparent', marginTop: -20 }} color={Colors.brandPrimary} />
          </View>
        </TouchableOpacity>
      )
    );
  },
  renderScheduleItem(when, what) {
    return (
      <View>
        <View style={Styles.rowContainer}>
          <Text style={{ width: 150, ...Fonts.style.h4, color: Colors.textSecondary }}>
            {when}
          </Text>
          <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary }}>
            {what}
          </Text>
        </View>
        {CommonWidgets.renderSpacer(10)}
      </View>
    );
  },
  renderSizedAvatar(imgUri, onPress, size) {
    let _src = { uri: imgUri };
    if (!isNaN(imgUri)) { _src = imgUri; } // require('Avatar')1
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={_src} />
      </TouchableOpacity>
    );
  },

  renderFilterHeader(img1, text, img2) {
    let _src1 = { uri: img1 };
    if (!isNaN(img1)) { _src1 = img1; }
    let _src2 = { uri: img2 };
    if (!isNaN(img1)) { _src2 = img2; }
    return (
      <View style={[Styles.container, { flexDirection: 'row', backgroundColor: 'transparent' }]}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Image style={Styles.filterIcon} source={_src1} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={Fonts.style.h4}>
            {text}
          </Text>
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Image style={[Styles.filterIcon, { justifyContent: 'flex-end' }]} source={_src2} />
        </View>
      </View>
    );
  },

  renderNavBarLeftButton(onPress, icon = 'back') {
    let iconName = icon;
    if (icon === 'back') iconName = 'chevron-left';
    if (icon === 'menu') iconName = 'bars';
    if (icon === 'search') iconName = 'search';
    if (icon === 'clear') return(<Text style={{color: "#ffffff", fontSize:16, top:-5}}>
                { "Clear" }
            </Text> );
    return (
      <TouchableOpacity
        style={ {paddingBottom: Platform.OS === 'android' ? 8 : 8 }}
        onPress={onPress} >
        {(isNaN(icon)) ?
          <Icon name={iconName} size={20} color={Colors.textTitle} />
        :
          (icon == Images.downArrow) ?
            <Image style={{ width: 20, height: 15, resizeMode: 'stretch', top: 3 }} source={icon} />
          :
            <Image style={{ width: 35, height: 25, resizeMode: 'stretch' }} source={icon} />
        }
      </TouchableOpacity>
    );
  },

  renderIcon(onPress, icon = 'chevron-circle-right') {
    const iconName = 'chevron-circle-right';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <Icon name={icon} size={30} color={Colors.brandPrimary} />
      </TouchableOpacity>
    );
  },

  renderVideoClip(onPress, imgPath, caption) {
    return (
      <TouchableOpacity onPres={onPress} style={{ marginHorizontal: 10, flexDirection: 'column', alignItems: 'center' }}>
        <Image source={3} style={styles.videoClipSize} />
        <Text style={[{ color: Colors.brandPrimary }, Fonts.style.h4]}>
          {caption}
        </Text>
      </TouchableOpacity>
    );
  },

  renderImgBtn(onPress, style, img) {
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <View>
          <Image style={[{ width: Metrics._real(90), height: Metrics._real(90), resizeMode: 'stretch' }, style]} source={img} />
        </View>
      </TouchableOpacity>
    );
  },

  renderListHeader(text, backColor, textColor) {
    return (
      <View style={[styles.listHeaderContainer, { backgroundColor: backColor }]} >
        <Text style={[styles.listHeaderTitle, { letterSpacing: 0.5, color: textColor }]} >
          {text}
        </Text>
      </View>
    );
  },

  renderFloatButton(onPress) {
    return (
      <MKButton
        style={{ position: 'absolute', bottom: 10, right: 10, padding: 15 }}
        backgroundColor={Colors.brandPrimary}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.5}
        shadowColor={'black'}
        fab
        onPress={onPress}>
        <Image
          pointerEvents="none"
          source={Icons.trend}
          style={{ width: 30, height: 30 }}
          resizeMode={'contain'} />
      </MKButton>
    );
  },

  renderForwardIcon() {
    return (
      <View style={styles.forwardIconContainer}>
        <Icon
          style={{ marginTop: 5 }}
          name={'chevron-right'}
          size={20}
          color={Colors.textThird}
        />
      </View>
    );
  },

  renderTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>

        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderCheckboxTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          <View style={styles.checkboxIconContainer}>
            <MKCheckbox
              checked={false}
            />
          </View>
        </View>
      </MKButton>
    );
  },

  renderTipListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroun dColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.horzCenter, { flex: 10 }]}>
            {this.renderTipDetails(item, false, () => {})}
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderSettingSwitchGroup(title, desc, onChange) {
    return (
      <View>
        <View style={Styles.horzCenter}>
          <Text style={[Fonts.style.fieldInput, { flex: 4 }]}>
            {title}
          </Text>
          <MKSwitch
            style={{ flex: 1 }}
            checked
            trackSize={25}
            trackLength={50}
            onColor={Colors.rippleSecondary}
            thumbOnColor={Colors.brandSEcondary}
            thumbOffColor={Colors.textThird}
            rippleColor={Colors.rippleSecondary}
            onCheckedChange={onChange} />
        </View>
        <Text
          style={[Fonts.style.listItemDescriptionText, {
            lineHeight: 14,
            color: Colors.fieldPlaceholder,
            marginTop: Platform.OS === 'ios' ? -Metrics.defaultMargin / 2 : -Metrics.defaultMargin }]}>
          {desc}
        </Text>
      </View>
    );
  },

  renderSettingHelpButtons(text, onPress) {
    return (
      <View>
        {this.renderSpacer(0.5)}
        <TouchableOpacity onPress={onPress}>
          <Text style={Fonts.style.fieldInput}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
};

export default CommonWidgets;
