import { colorGreenStrong, colorWhite } from 'assets/colors';
import { fontXs, fontXxs, medium } from 'assets/tokens';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  discountCnt: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: colorGreenStrong,
    height: 35,
    width: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
    top: -10,
  },
  discount: {
    fontSize: fontXxs,
    color: colorWhite,
    textAlign: 'center',
    fontWeight: medium,
  },
  discountAmount: {
    fontSize: fontXs,
  },
});

const Discount = ({ discountAmount }: { discountAmount?: number }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.discountCnt}>
      <Text style={[styles.discount, styles.discountAmount]}>{`${discountAmount}%`}</Text>
      <Text style={styles.discount}>{t('home.restaurants.dcto')}</Text>
    </View>
  );
};

Discount.defaultProps = {
  discountAmount: 0,
};

export default Discount;
