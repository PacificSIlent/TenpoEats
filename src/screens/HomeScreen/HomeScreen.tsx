import { useNavigation } from '@react-navigation/native';
import { colorGray, colorGreenLight, colorShadow, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { ScrollView } from 'components';
import 'config/ignoreLogs';
import { RouteStackNavigation } from 'navigation';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { getDashboardData, useAppDispatch } from 'store';
import LoadingAdvice from '../../components/LoadingAdvice';
import { useIsLoading } from '../../hooks/useIsLoading';
import { Address, Categories, Header, Restaurants } from './components';
import Favorites from './components/Favorites';

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: colorGray,
    overflow: 'hidden',
    height: 260,
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
    height: '100%',
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
});

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useIsLoading();
  const navigation = useNavigation<RouteStackNavigation>();

  const errorAction = () => {
    navigation.popToTop();
    getDashboardDataHandler();
  };

  const getDashboardDataHandler = () => {
    dispatch(getDashboardData())
      .unwrap()
      .catch(() => {
        navigation.navigate('Error', {
          data: {
            title: t('error.title'),
            description: t('error.description'),
            buttonText: t('error.retry'),
            onClick: errorAction,
          },
        });
      });
  };

  useEffect(() => {
    getDashboardDataHandler();
  }, []);

  return (
    <SafeAreaView style={globalStyles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>

          <View style={styles.address}>
            <Address />
          </View>

          <View style={styles.homeCnt}>
            <View style={styles.home}>
              {!isLoading ? (
                <>
                  <Restaurants />
                  <Categories />
                  <Favorites />
                </>
              ) : (
                <LoadingAdvice />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
