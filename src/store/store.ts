import { AnyAction, configureStore, Dispatch, Middleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import globalReducer from './features/global/globalSlice';

const middlewares: Middleware<any, any, Dispatch<AnyAction>>[] = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
