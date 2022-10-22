import { DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native';
import { configureFonts, MD2LightTheme as DefaultTheme } from 'react-native-paper';
import { colorGray } from '../../assets/colors';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Gotham Book',
    },
    medium: {
      fontFamily: 'Gotham Medium',
    },
    light: {
      fontFamily: 'Gotham Light',
    },
    thin: {
      fontFamily: 'Gotham Book',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Gotham Book',
    },
    medium: {
      fontFamily: 'Gotham Medium',
    },
    light: {
      fontFamily: 'Gotham Light',
    },
    thin: {
      fontFamily: 'Gotham Book',
    },
  },
  android: {
    regular: {
      fontFamily: 'Gotham Book',
    },
    medium: {
      fontFamily: 'Gotham Medium',
    },
    light: {
      fontFamily: 'Gotham Light',
    },
    thin: {
      fontFamily: 'Gotham Book',
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
