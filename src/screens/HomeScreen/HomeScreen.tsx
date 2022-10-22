import { colorBlack, colorGray, colorGreenLight, colorShadow, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { bold, fontXl } from 'assets/tokens';
import { ScrollView, Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Address, Header } from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: colorGray,
    overflow: 'hidden',
    height: Dimensions.get('window').height - Dimensions.get('window').height * 0.7,
    zIndex: 0,
  },
  address: {
    backgroundColor: colorGreenLight,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 22,
  },
  homeCnt: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colorGreenLight,
  },
  home: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colorWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 38,
    paddingLeft: 16,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleSection: {
    fontSize: fontXl,
    fontWeight: bold,
    color: colorBlack,
  },
});

const Home = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={globalStyles.page}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>

          <View style={styles.address}>
            <Address />
          </View>

          <View style={styles.homeCnt}>
            <View style={styles.home}>
              <Text style={styles.titleSection}>{t('home.restaurants.title')}</Text>
              <Text style={styles.titleSection}>{t('home.categories.title')}</Text>
              <Text style={styles.titleSection}>{t('home.favorites.title')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
