import { colorBlack } from 'assets/colors';
import { book, fontM, fontS, medium } from 'assets/tokens';
import { Rate } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  info: {
    marginTop: 5,
    width: '100%',
    flex: 1,
  },
  name: {
    fontSize: fontM,
    color: colorBlack,
    fontWeight: medium,
    textAlign: 'center',
  },
  infoCnt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: fontS,
    color: colorBlack,
    fontWeight: book,
    marginLeft: 4,
  },
});

const RestaurantInfo = ({
  name,
  rate,
  deliveryMin,
  deliveryMax,
}: {
  name: string;
  rate: string;
  deliveryMin: number;
  deliveryMax: number;
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoCnt}>
        <Rate rate={rate} />
        <Text style={styles.infoText}>{`${deliveryMin}-${deliveryMax} ${t(
          'home.restaurants.min',
        )}`}</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;
