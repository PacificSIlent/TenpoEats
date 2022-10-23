import { RestaurantLogos } from 'helpers';
import React from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  logo: { width: 100, height: 100, borderRadius: 20 },
  img: { width: '100%', height: '100%', borderRadius: 20 },
});

const Logo = ({
  restaurantId,
  style,
  imgStyle,
}: {
  restaurantId: string;
  style?: StyleProp<ViewStyle>;
  imgStyle?: StyleProp<any>;
}) => {
  return (
    <View style={[styles.logo, style]}>
      <Image
        style={[styles.img, imgStyle]}
        source={RestaurantLogos.find((logo) => logo.id === restaurantId)?.src}
      />
    </View>
  );
};

Logo.defaultProps = {
  style: StyleSheet.create({}),
  imgStyle: StyleSheet.create({}),
};

export default Logo;
