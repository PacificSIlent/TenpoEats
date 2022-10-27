import { useNavigation } from '@react-navigation/native';
import { colorGreen } from 'assets/colors';
import { PointerMap } from 'assets/icons';
import { fontL, fontS, light, medium } from 'assets/tokens';
import { Text } from 'components';
import { RouteStackNavigation } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const styles = StyleSheet.create({
  address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: fontS,
    fontWeight: medium,
    color: colorGreen,
  },
  addressTitle: {
    fontSize: fontL,
    fontWeight: light,
    color: colorGreen,
  },
  addressCnt: {
    marginLeft: 10,
  },
});

const Address = () => {
  const { t } = useTranslation();
  const address = useSelector((state: RootState) => state.global.addressSaved);

  const navigation = useNavigation<RouteStackNavigation>();

  const goToSelectAddress = () => {
    navigation.navigate('AddAddress');
  };

  return !!address && address.address !== '' ? (
    <TouchableOpacity style={[styles.address]} onPress={goToSelectAddress}>
      <PointerMap />
      <View style={styles.addressCnt}>
        <Text style={styles.title}>{t('home.address.addressSelectedText')}</Text>
        <Text style={styles.addressTitle} numberOfLines={1} ellipsizeMode="tail">
          {address.address}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.address, { justifyContent: 'center' }]}
      onPress={goToSelectAddress}
    >
      <PointerMap />
      <Text style={[styles.addressTitle, { marginLeft: 10 }]}>{t('home.address.title')}</Text>
    </TouchableOpacity>
  );
};

export default Address;
