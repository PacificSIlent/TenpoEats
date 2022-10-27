import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { colorGreen, colorGreenLight } from 'assets/colors';
import { PointerMap } from 'assets/icons';
import { bold, fontL } from 'assets/tokens';
import Header from 'components/Header';
import { RouteParamList } from 'navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import { AddAddress } from 'screens/AddAddress';
import { ErrorScreen } from 'screens/ErrorScreen';
import { HomeScreen } from 'screens/HomeScreen';
import { RestaurantDetail } from 'screens/RestaurantDetail';
import { setHomeFocused, useAppDispatch } from 'store';

const HomeStack = () => {
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator<RouteParamList>();
  const dispatch = useAppDispatch();

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
        statusBarStyle: Platform.OS === 'ios' ? 'dark' : 'light',
        headerBackTitle: t('app.general.atras'),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        listeners={{
          blur: () => {
            // Utilizado para el flujo de reiniciar animación del header
            setTimeout(() => {
              dispatch(setHomeFocused(false));
            }, 400);
          },
          focus: () => {
            // Utilizado para el flujo de reiniciar animación del header
            dispatch(setHomeFocused(true));
          },
        }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={({ navigation }: { navigation: NativeStackNavigationProp<RouteParamList> }) => ({
          headerBackVisible: false,
          headerTitle: () => <Header mode="search" navigation={navigation} />,
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={({ navigation }: { navigation: NativeStackNavigationProp<RouteParamList> }) => ({
          headerBackVisible: false,
          headerTitle: () => (
            <Header
              icon={<PointerMap color={colorGreen} />}
              title={t('addAddress.title')}
              mode="normal"
              navigation={navigation}
            />
          ),
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
