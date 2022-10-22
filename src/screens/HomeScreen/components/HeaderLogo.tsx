import { Mano, Moto, Star } from 'assets/images';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  headerLogo: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  mano: {
    position: 'absolute',
    right: '15%',
    bottom: '-5%',
    zIndex: 1,
    transform: [{ scale: 1.1 }],
  },
  moto: {
    position: 'absolute',
    bottom: '16%',
    right: '37%',
    transform: [{ scale: 1.4 }],
    zIndex: 0,
  },
  firstStar: {
    position: 'absolute',
    bottom: '65%',
    right: '48%',
    transform: [{ rotate: '55deg' }, { scale: 1.2 }],
  },
  secondStar: {
    position: 'absolute',
    bottom: '80%',
    right: '38%',
    transform: [{ scale: 1.2 }],
  },
  thirdStar: {
    position: 'absolute',
    bottom: '75%',
    right: '13%',
    transform: [{ rotate: '25deg' }, { scale: 1.2 }],
  },
  fourStar: {
    position: 'absolute',
    bottom: '55%',
    right: '10%',
    transform: [{ rotate: '20deg' }, { scale: 1.2 }],
  },
});

const HeaderLogo = () => {
  return (
    <View style={styles.headerLogo}>
      <Star style={styles.firstStar} />
      <Star style={styles.secondStar} />
      <Star style={styles.thirdStar} />
      <Star style={styles.fourStar} />
      <Mano style={styles.mano} />
      <Moto style={styles.moto} />
    </View>
  );
};

export default HeaderLogo;
