import { Mano, Moto, Star } from 'assets/images';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

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
  motoCnt: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 0,
  },
  moto: {
    transform: [{ scale: 1.4 }],
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

const width = Dimensions.get('window').width;

const HeaderLogo = () => {
  const animation = useSharedValue({ right: width * 0.23 });

  const animationStyle = useAnimatedStyle(() => {
    return {
      right: withTiming(animation.value.right, {
        duration: 500,
      }),
    };
  });

  useEffect(() => {
    setTimeout(() => {
      animation.value = { right: width - width * 0.63 };
    }, 300);
  }, []);

  return (
    <View style={styles.headerLogo}>
      <Star style={styles.firstStar} />
      <Star style={styles.secondStar} />
      <Star style={styles.thirdStar} />
      <Star style={styles.fourStar} />
      <Mano style={styles.mano} />
      <Animated.View style={[styles.motoCnt, animationStyle]}>
        <Moto style={styles.moto} />
      </Animated.View>
    </View>
  );
};

export default HeaderLogo;
