import { useNavigation } from '@react-navigation/native';
import { colorBlack, colorGreenStrong, colorWhite } from 'assets/colors';
import { Search } from 'assets/images';
import { bold, fontS, fontXxl } from 'assets/tokens';
import { RouteStackNavigation } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderLogo } from '.';

const styles = StyleSheet.create({
  headerCnt: {
    height: '100%',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  user: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: colorGreenStrong,
    borderRadius: 20,
    backgroundColor: colorWhite,
  },
  userImg: {
    width: '100%',
    height: '100%',
  },
  logoCnt: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
  search: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: fontXxl,
    fontWeight: bold,
    color: colorBlack,
    fontFamily: 'Roboto',
  },
  title2: {
    color: colorGreenStrong,
  },
  subtitle: {
    fontSize: fontS,
    fontWeight: bold,
    color: colorBlack,
  },
});

const userImage = require('assets/images/user.png');

const Header = () => {
  const { t } = useTranslation();

  const navigation = useNavigation<RouteStackNavigation>();

  const goToSelectAddress = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <View style={styles.headerCnt}>
        <View style={styles.headerOptions}>
          <View style={styles.user}>
            <Image source={userImage} style={styles.userImg} />
          </View>
          <TouchableOpacity style={styles.search} onPress={goToSelectAddress}>
            <Search />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{t('home.header.tenpo')}</Text>
        <Text style={[styles.title, styles.title2]}>{t('home.header.eats')}</Text>
        <Text style={styles.subtitle}>{t('home.header.subtitle')}</Text>
      </View>
      <View style={styles.logoCnt}>
        <HeaderLogo />
      </View>
    </>
  );
};

export default Header;
