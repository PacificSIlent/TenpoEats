import { colorGrayStrong, colorGreenStrong } from 'assets/colors';
import { fontL, fontS, medium, thin } from 'assets/tokens';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20%',
  },
  title: {
    fontSize: fontS,
    fontWeight: medium,
    color: colorGreenStrong,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: fontL,
    fontWeight: thin,
    color: colorGrayStrong,
    textAlign: 'center',
  },
});

const LoadingAdvice = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('loadingAdvice.title')}</Text>
      <Text style={styles.subtitle}>{t('loadingAdvice.subtitle')}</Text>
    </View>
  );
};

export default LoadingAdvice;
