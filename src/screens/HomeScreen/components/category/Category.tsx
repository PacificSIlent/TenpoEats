import { colorShadow, colorWhite } from 'assets/colors';
import { bold, fontM } from 'assets/tokens';
import { Text } from 'components';
import { CategoriesImg } from 'helpers';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  category: {
    position: 'relative',
    height: 80,
    width: 170,
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 10,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: colorWhite,
    marginBottom: 10,
  },
  title: {
    position: 'absolute',
    color: colorWhite,
    fontSize: fontM,
    fontWeight: bold,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

const Category = ({ categoryId, name }: { categoryId: string; name: string }) => {
  return (
    <View style={styles.category}>
      <Image
        source={CategoriesImg.find((category) => category.id === categoryId)?.src}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Category;
