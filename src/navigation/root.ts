import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ErrorData } from 'models';

export type RouteParamList = {
  Error: { data?: ErrorData };
  Home: undefined;
};

export type RouteStackNavigation = NativeStackNavigationProp<RouteParamList>;
