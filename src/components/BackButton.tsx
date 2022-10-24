import { HeaderBackButton } from '@react-navigation/elements';
import { colorGreen } from 'assets/colors';
import { fontM } from 'assets/tokens';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    marginHorizontal: 0,
    marginRight: 0,
    justifyContent: 'flex-start',
  },
});

const BackButton = ({ navigationFunction }: { navigationFunction: () => void }) => {
  return (
    <HeaderBackButton
      labelVisible={false}
      labelStyle={{ fontSize: fontM }}
      pressColor={colorGreen}
      style={styles.backButton}
      tintColor={colorGreen}
      onPress={() => {
        navigationFunction();
      }}
    />
  );
};

export default BackButton;
