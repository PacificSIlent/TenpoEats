import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Favorite from './favorites/Favorite';
import Section from './Section';

const styles = StyleSheet.create({
  favorites: {
    marginBottom: 40,
  },
});

const Favorites = () => {
  const { t } = useTranslation();

  const favorites = useSelector((state: RootState) => state.global.dashboardData.favorites);

  return (
    <Section style={styles.favorites} title={t('home.favorites.title')}>
      {favorites.map((favorite, key) => (
        <Favorite
          key={key}
          restaurantId={favorite.restaurant.id}
          favoriteId={favorite.id}
          deliveryMax={favorite.restaurant.delivery.max}
          deliveryMin={favorite.restaurant.delivery.min}
          productName={favorite.productName}
          rate={favorite.restaurant.rate}
          restaurantName={favorite.restaurant.name}
        />
      ))}
    </Section>
  );
};

export default Favorites;
