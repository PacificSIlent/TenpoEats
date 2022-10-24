import { useNavigation } from '@react-navigation/native';
import { Restaurant as RestaurantModel } from 'models';
import { RouteStackNavigation } from 'navigation';
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
  const navigation = useNavigation<RouteStackNavigation>();

  const restaurants = useSelector((state: RootState) => state.global.dashboardData.restaurants);

  const goToDetails = (restaurant: RestaurantModel) => {
    navigation.navigate('RestaurantDetail', { data: restaurant });
  };

  return (
    <Section style={styles.restaurants} title={t('home.restaurants.title')}>
      {restaurants.map((restaurant, key) => (
        <TouchableOpacity onPress={() => goToDetails(restaurant)} key={key}>
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
