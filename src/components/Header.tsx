import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colorGreen } from 'assets/colors';
import { Search } from 'assets/images';
import { fontL, light } from 'assets/tokens';
import { RouteParamList } from 'navigation';
import React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Address } from 'screens/HomeScreen/components';
import BackButton from './BackButton';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 30,
  },
  titleCnt: { flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
  title: {
    fontSize: fontL,
    fontWeight: light,
    color: colorGreen,
    marginLeft: 10,
  },
  addressCnt: {
    maxWidth: '70%',
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  actionsitem: {
    marginLeft: 24,
    position: 'relative',
  },
});

const Header = ({
  mode,
  title,
  navigation,
  icon,
}: {
  mode: 'normal' | 'search';
  title?: string;
  navigation: NativeStackNavigationProp<RouteParamList>;
  icon?: any;
}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const goToSelectAddress = () => {
    navigation.navigate('AddAddress');
  };

  return (
    <View style={styles.container}>
      <BackButton navigationFunction={goBack} />
      {mode === 'normal' ? (
        <View style={styles.titleCnt}>
          {icon ? icon : null}
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : (
        <>
          <View style={[styles.addressCnt, { marginLeft: Platform.OS === 'android' ? 10 : 0 }]}>
            <Address />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={goToSelectAddress}>
              <View style={styles.actionsitem}>
                <Search color={colorGreen} />
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

Header.defaultProps = {
  title: '',
  icon: undefined,
};
export default Header;
