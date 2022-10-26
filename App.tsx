import { NavigationContainer } from '@react-navigation/native';
import { Loading } from 'components';
import { HomeStack } from 'navigation';
import React, { useEffect, useState } from 'react';
import { enableLatestRenderer } from 'react-native-maps';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { navigationTheme, paperTheme } from './src/assets/styles';
import { store } from './src/store';
require('./src/server');

enableLatestRenderer();

const App: () => JSX.Element = () => {
  const [isLoading, setIsLoading] = useState(false);

  store.subscribe(() => {
    setIsLoading(store.getState().global.loading);
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <Portal.Host>
        <PaperProvider theme={paperTheme}>
          <Provider store={store}>
            <NavigationContainer theme={navigationTheme}>
              <HomeStack />
              {isLoading ? <Loading /> : null}
            </NavigationContainer>
          </Provider>
        </PaperProvider>
      </Portal.Host>
    </SafeAreaProvider>
  );
};

export default App;
