import { DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native';
import { configureFonts, MD2LightTheme as DefaultTheme } from 'react-native-paper';
import { colorGray } from '../../assets/colors';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Gotham',
    },
    medium: {
      fontFamily: 'Gotham',
    },
    light: {
      fontFamily: 'Gotham',
    },
    thin: {
      fontFamily: 'Gotham',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Gotham',
    },
    medium: {
      fontFamily: 'Gotham',
    },
    light: {
      fontFamily: 'Gotham',
    },
    thin: {
      fontFamily: 'Gotham',
    },
  },
  android: {
    regular: {
      fontFamily: 'Gotham',
    },
    medium: {
      fontFamily: 'Gotham',
    },
    light: {
      fontFamily: 'Gotham',
    },
    thin: {
      fontFamily: 'Gotham',
    },
  },
};

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: configureFonts(fontConfig),
};

export const navigationTheme = {
  ...DefaultThemeNavigation,
  colors: {
    ...DefaultThemeNavigation.colors,
    background: colorGray,
  },
  fonts: configureFonts(fontConfig),
};
