import { colorGreenStrong } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { Button, Text } from 'components';
import { ErrorData } from 'models';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  container: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colorGreenStrong,
  },
});

const ErrorScreen = ({ errorData }: { errorData?: ErrorData }) => {
  const onPress = () => {
    errorData!.onClick();
  };

  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <Text style={styles.text}>{errorData!.title}</Text>
        <Text style={styles.text}>{errorData!.description}</Text>
      </View>
      <Button
        accessibilityHint={errorData!.buttonText}
        accessibilityLabel={errorData!.buttonText}
        onPress={onPress}
        testID="btn-error"
      >
        {errorData!.buttonText}
      </Button>
    </View>
  );
};

ErrorScreen.defaultProps = {
  errorData: undefined,
};

export default ErrorScreen;
