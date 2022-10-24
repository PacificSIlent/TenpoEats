import { colorGreenLight, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { Text } from 'components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colorGreenLight,
  },
  container: {
    position: 'relative',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colorWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
  },
});

const AddAddress = () => {
  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <Text>Pantalla de agregar dirección</Text>
      </View>
    </View>
  );
};

export default AddAddress;
