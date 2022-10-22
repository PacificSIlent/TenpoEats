import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { Restaurant } from './restaurant';
import Section from './Section';

const Restaurants = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('home.restaurants.title')}>
      <TouchableOpacity onPress={() => {}}>
        <Restaurant
          discountAmount={50}
          restaurantId={'rest_001'}
          name={'Macdonalds'}
          rate={'3.5'}
          deliveryMin={10}
          deliveryMax={50}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Restaurant
          discountAmount={30}
          restaurantId={'rest_002'}
          name={'MELT pizzas'}
          rate={'4.5'}
          deliveryMin={10}
          deliveryMax={60}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Restaurant
          discountAmount={20}
          restaurantId={'rest_003'}
          name={'YOKONO'}
          rate={'3.5'}
          deliveryMin={10}
          deliveryMax={50}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Restaurant
          discountAmount={10}
          restaurantId={'rest_004'}
          name={'Lasagna Pizza'}
          rate={'3.5'}
          deliveryMin={10}
          deliveryMax={50}
        />
      </TouchableOpacity>
    </Section>
  );
};

export default Restaurants;
