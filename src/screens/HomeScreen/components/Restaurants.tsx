import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Restaurant } from './restaurant';
import Section from './Section';

const styles = StyleSheet.create({
  restaurants: {
    marginBottom: 30,
  },
});

const Restaurants = () => {
  const { t } = useTranslation();

  const restaurants = useSelector((state: RootState) => state.global.dashboardData.restaurants);

  return (
    <Section style={styles.restaurants} title={t('home.restaurants.title')}>
      {restaurants.map((restaurant, key) => (
        <TouchableOpacity onPress={() => {}} key={key}>
          <Restaurant
            discountAmount={restaurant.discount}
            restaurantId={restaurant.id}
            name={restaurant.name}
            rate={restaurant.rate}
            deliveryMin={restaurant.delivery.min}
            deliveryMax={restaurant.delivery.max}
          />
        </TouchableOpacity>
      ))}
    </Section>
  );
};

export default Restaurants;
