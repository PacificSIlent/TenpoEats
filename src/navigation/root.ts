import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ErrorData, Restaurant } from 'models';

export type RouteParamList = {
  Error: { data?: ErrorData };
  Home: undefined;
  RestaurantDetail: { data?: Restaurant };
  AddAddress: undefined;
};

export type RouteStackNavigation = NativeStackNavigationProp<RouteParamList>;
