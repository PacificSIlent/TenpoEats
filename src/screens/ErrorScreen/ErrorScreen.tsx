import { useRoute } from '@react-navigation/native';
import { colorGrayStrong, colorGreenStrong } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { bold, fontL, fontS, light } from 'assets/tokens';
import { Button, Text } from 'components';
import { ErrorData } from 'models';
import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
  },
  container: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontS,
    fontWeight: bold,
    color: colorGreenStrong,
    marginBottom: 5,
  },
  description: {
    fontSize: fontL,
    fontWeight: light,
    color: colorGrayStrong,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {},
});

const ErrorScreen = () => {
  const route = useRoute();

  const [dataError, setDataError] = useState<ErrorData>({
    buttonText: '',
    description: '',
    title: '',
    onClick: () => {},
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    const { params } = route as { params: { data: ErrorData } };
    setDataError(params.data);
    return () => backHandler.remove();
  }, []);

  const onPress = () => {
    dataError.onClick();
  };

  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <Text style={styles.title}>{dataError.title}</Text>
        <Text style={styles.description}>{dataError.description}</Text>
        <Button
          accessibilityHint={dataError.buttonText}
          accessibilityLabel={dataError.buttonText}
          onPress={onPress}
          testID="btn-error"
          style={styles.button}
        >
          {dataError.buttonText}
        </Button>
      </View>
    </View>
  );
};

export default ErrorScreen;
