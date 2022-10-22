import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const useIsLoading = () => {
  const globalLoading = useSelector((state: RootState) => state.global.loading);

  const [loading, setLoading] = useState<boolean>(globalLoading);
  useEffect(() => {
    setLoading(globalLoading);
  }, [globalLoading]);
  return loading;
};
