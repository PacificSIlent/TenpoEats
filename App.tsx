import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from 'navigation';
import React from 'react';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { navigationTheme, paperTheme } from './src/assets/styles';
import { store } from './src/store';

const App: () => JSX.Element = () => {
  return (
    <SafeAreaProvider>
      <Portal.Host>
        <PaperProvider theme={paperTheme}>
          <Provider store={store}>
            <NavigationContainer theme={navigationTheme}>
              <HomeStack />
            </NavigationContainer>
          </Provider>
        </PaperProvider>
      </Portal.Host>
    </SafeAreaProvider>
  );
};

export default App;
