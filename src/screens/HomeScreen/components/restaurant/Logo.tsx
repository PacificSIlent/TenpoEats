import { RestaurantLogos } from 'helpers';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  logo: { width: 100, height: 100, borderRadius: 20 },
  img: { width: '100%', height: '100%', borderRadius: 20 },
});

const Logo = ({ restaurantId }: { restaurantId: string }) => {
  return (
    <View style={styles.logo}>
      <Image
        source={RestaurantLogos.find((logo) => logo.id === restaurantId)?.src}
        style={styles.img}
      />
    </View>
  );
};

export default Logo;
