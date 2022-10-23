import { colorBlack } from 'assets/colors';
import { StarRate } from 'assets/images';
import { book, fontS } from 'assets/tokens';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: fontS,
    fontWeight: book,
    color: colorBlack,
    marginLeft: 3,
  },
});

const Favorite = ({ rate }: { rate: string }) => {
  return (
    <View style={styles.info}>
      <StarRate />
      <Text style={styles.text}>{rate}</Text>
    </View>
  );
};

export default Favorite;
