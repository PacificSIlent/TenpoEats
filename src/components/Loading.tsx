import { colorBlack, colorWhite } from 'assets/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: colorBlack,
    opacity: 0.6,
  },
});

const Loading = () => (
  <View testID="id-loading" style={styles.container}>
    <DotIndicator color={colorWhite} count={3} />
  </View>
);

export default Loading;
