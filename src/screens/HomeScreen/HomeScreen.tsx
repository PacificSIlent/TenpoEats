import { colorGray, colorGreenLight, colorShadow, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { ScrollView } from 'components';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Address, Header, Restaurants } from './components';

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
    height: Dimensions.get('window').height * 0.3,
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
});

const Home = () => {
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
