import { NavigationContainer } from '@react-navigation/native';
import { Loading } from 'components';
import { HomeStack } from 'navigation';
import React, { useState } from 'react';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { navigationTheme, paperTheme } from './src/assets/styles';
import { store } from './src/store';
require('./src/server');

const App: () => JSX.Element = () => {
  const [isLoading, setIsLoading] = useState(false);

  store.subscribe(() => {
    setIsLoading(store.getState().global.loading);
  });

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
