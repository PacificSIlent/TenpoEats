import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import Favorite from './favorites/Favorite';
import Section from './Section';

const styles = StyleSheet.create({
  favorites: {
    marginBottom: 40,
  },
});

const Favorites = () => {
  const { t } = useTranslation();

  return (
    <Section style={styles.favorites} title={t('home.favorites.title')}>
      <Favorite
        restaurantId="rest_001"
        favoriteId="fav_001"
        deliveryMax={50}
        deliveryMin={10}
        productName="Combo hamburguesa Bigmac"
        rate="3.5"
        restaurantName="Macdonalds"
      />
      <Favorite
        restaurantId="rest_002"
        favoriteId="fav_002"
        deliveryMax={50}
        deliveryMin={10}
        productName="Pizza Mediana 3 Ingredientes"
        rate="3.5"
        restaurantName="MELT pizzas"
      />
    </Section>
  );
};

export default Favorites;
