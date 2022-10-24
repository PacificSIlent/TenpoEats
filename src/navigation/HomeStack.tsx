import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { colorGreen, colorGreenLight } from 'assets/colors';
import { bold, fontL } from 'assets/tokens';
import { Header } from 'components';
import { RouteParamList } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorScreen } from 'screens/ErrorScreen';
import { HomeScreen } from 'screens/HomeScreen';
import { RestaurantDetail } from 'screens/RestaurantDetail';

const HomeStack = () => {
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator<RouteParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorGreenLight,
        },
        headerTintColor: colorGreenLight,
        headerTitleStyle: {
          fontWeight: bold,
          fontFamily: 'Gotham',
          fontSize: fontL,
          color: colorGreen,
        },
        contentStyle: {
          flex: 1,
        },
        statusBarStyle: 'dark',
        headerBackTitle: t('app.general.atras'),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={({ navigation }: { navigation: NativeStackNavigationProp<RouteParamList> }) => ({
          headerBackVisible: false,
          headerTitle: () => <Header navigation={navigation} />,
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Error"
        component={ErrorScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
