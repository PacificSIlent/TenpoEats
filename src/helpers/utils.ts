import { t } from 'i18next';

export const errorHandler = (error: any) => {
  if (error.message === 'Network Error') {
    return Promise.reject(t('errors.generic'));
  }
  return Promise.reject(error);
};

export const errorMessage = (error: any) => {
  let newError: any;
  if (typeof error === 'string') {
    newError = {
      message: '',
    };
  } else {
    newError = error?.response?.data;
    newError = { ...newError, code: error?.response?.status || newError?.code };
  }
  return newError;
};

export const wait = (timeout: number) =>
  new Promise((resolve: any) => setTimeout(resolve, timeout));
