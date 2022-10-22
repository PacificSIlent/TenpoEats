import { colorWhite } from 'assets/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const Loading = () => (
  <View testID="id-loading" style={styles.container}>
    <ActivityIndicator color={colorWhite} size="large" />
  </View>
);

export default Loading;
