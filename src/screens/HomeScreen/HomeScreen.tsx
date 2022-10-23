import { colorGray, colorGreenLight, colorShadow, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { ScrollView } from 'components';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getDashboardData, RootState, useAppDispatch } from 'store';
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
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dashboardData = useSelector((state: RootState) => state.global.dashboardData);

  useEffect(() => {
    dispatch(getDashboardData())
      .unwrap()
      .catch((error) => console.log('Error Servicio', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Restaurants />
              <Categories />
              <Favorites />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
