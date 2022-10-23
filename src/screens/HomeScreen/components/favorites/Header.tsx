import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FavoritesImg } from '../../../../helpers/iconsUtils';
import Logo from '../restaurant/Logo';

const styles = StyleSheet.create({
  imgCnt: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  logoCnt: {
    width: 42,
    height: 42,
    borderRadius: 8,
    position: 'absolute',
    zIndex: 1,
    marginLeft: 12,
    marginTop: 8,
  },
  logo: {
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

const Header = ({ favoriteId, restaurantId }: { favoriteId: string; restaurantId: string }) => {
  return (
    <View style={styles.imgCnt}>
      <Logo style={styles.logoCnt} imgStyle={styles.logo} restaurantId={restaurantId} />
      <Image
        source={FavoritesImg.find((favorite) => favorite.id === favoriteId)?.src}
        style={styles.image}
        resizeMethod={'auto'}
        resizeMode={'stretch'}
      />
    </View>
  );
};

export default Header;
