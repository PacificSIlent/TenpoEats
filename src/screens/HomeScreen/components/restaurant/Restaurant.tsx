import React from 'react';
import { StyleSheet, View } from 'react-native';
import Discount from './Discount';
import Info from './Info';
import Logo from './Logo';

const styles = StyleSheet.create({
  restaurant: {
    position: 'relative',
    marginRight: 10,
    marginVertical: 10,
  },
});

const Restaurant = ({
  discountAmount,
  restaurantId,
  name,
  rate,
  deliveryMin,
  deliveryMax,
}: {
  discountAmount: number;
  restaurantId: string;
  name: string;
  rate: string;
  deliveryMin: number;
  deliveryMax: number;
}) => {
  return (
    <View style={styles.restaurant}>
      <Discount discountAmount={discountAmount} />
      <Logo restaurantId={restaurantId} />
      <Info name={name} rate={rate} deliveryMin={deliveryMin} deliveryMax={deliveryMax} />
    </View>
  );
};

export default Restaurant;
