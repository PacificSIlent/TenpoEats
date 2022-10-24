import { useNavigation } from '@react-navigation/native';
import { colorGreen } from 'assets/colors';
import { PointerMap } from 'assets/icons';
import { fontL, light } from 'assets/tokens';
import { RouteStackNavigation } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  address: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: fontL,
    fontWeight: light,
    color: colorGreen,
    marginLeft: 10,
  },
});

const Address = () => {
  const { t } = useTranslation();

  const navigation = useNavigation<RouteStackNavigation>();

  const goToSelectAddress = () => {
    navigation.navigate('AddAddress');
  };

  return (
    <TouchableOpacity style={styles.address} onPress={goToSelectAddress}>
      <PointerMap />
      <Text style={styles.addressTitle}>{t('home.address.title')}</Text>
    </TouchableOpacity>
  );
};

export default Address;
