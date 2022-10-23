import { colorBlack, colorGreenStrong, colorShadow, colorWhite } from 'assets/colors';
import { bold, book, fontS } from 'assets/tokens';
import { Rate, Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Header from './Header';

const styles = StyleSheet.create({
  favorite: {
    width: 250,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: colorWhite,
  },
  infoCnt: {
    padding: 8,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoMargin: {
    marginBottom: 5,
  },
  text: {
    fontSize: fontS,
    fontWeight: book,
    color: colorBlack,
  },
  restaurantName: {
    fontSize: fontS,
    fontWeight: bold,
    color: colorGreenStrong,
  },
});

const Favorite = ({
  favoriteId,
  restaurantId,
  productName,
  rate,
  restaurantName,
  deliveryMin,
  deliveryMax,
}: {
  favoriteId: string;
  restaurantId: string;
  productName: string;
  rate: string;
  restaurantName: string;
  deliveryMin: number;
  deliveryMax: number;
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.favorite}>
      <Header favoriteId={favoriteId} restaurantId={restaurantId} />
      <View style={styles.infoCnt}>
        <View style={[styles.info, styles.infoMargin]}>
          <Text style={styles.text}>{productName}</Text>
          <Rate rate={rate} />
        </View>
        <View style={styles.info}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          <Text style={styles.text}>{`${deliveryMin}-${deliveryMax} ${t(
            'home.restaurants.min',
          )}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Favorite;
