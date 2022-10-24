import { useRoute } from '@react-navigation/native';
import { colorBlack, colorGrayStrong, colorGreenLight, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { bold, book, fontL, fontS, fontXl } from 'assets/tokens';
import { Text } from 'components';
import { Restaurant } from 'models';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from 'screens/HomeScreen/components/restaurant/Logo';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colorGreenLight,
  },
  container: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colorWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
  },
  logoCnt: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginBottom: 20,
  },
  logo: {
    borderRadius: 30,
  },
  restaurantName: {
    fontSize: fontL,
    fontWeight: bold,
    color: colorBlack,
    textAlign: 'center',
    marginBottom: 5,
  },
  restaurantCategory: {
    fontSize: fontS,
    fontWeight: book,
    color: colorGrayStrong,
    textAlign: 'center',
  },
  detail: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    fontSize: fontXl,
    fontWeight: book,
    color: colorGrayStrong,
    textAlign: 'center',
  },
});

const RestaurantDetail = () => {
  const route = useRoute();

  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: '',
    rate: '',
    id: '',
    delivery: {
      min: 0,
      max: 0,
    },
    discount: 0,
    category: '',
    subcategory: '',
    detail: '',
  });

  useEffect(() => {
    const { params } = route as { params: { data: Restaurant } };
    setRestaurant(params.data);
  }, []);

  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <Logo style={styles.logoCnt} imgStyle={styles.logo} restaurantId={restaurant.id} />
        <Text style={styles.restaurantName}>{restaurant?.name}</Text>
        <Text
          style={styles.restaurantCategory}
        >{`${restaurant?.category} - ${restaurant?.subcategory}`}</Text>
        <View style={styles.detail}>
          <Text style={styles.detailText}>{restaurant?.detail}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDetail;
