import { useRoute } from '@react-navigation/native';
import { colorGreenLight, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { Text } from 'components';
import { Restaurant } from 'models';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colorGreenLight,
  },
  container: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

const RestaurantDetail = () => {
  const route = useRoute();

  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    const { params } = route as { params: { data: Restaurant } };
    setRestaurant(params.data);
  }, []);

  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <Text>{restaurant?.name}</Text>
      </View>
    </View>
  );
};

export default RestaurantDetail;
