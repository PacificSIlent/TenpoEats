import { colorBlack } from 'assets/colors';
import { book, fontL } from 'assets/tokens';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: colorBlack,
    fontFamily: 'Gotham',
    fontWeight: book,
    fontSize: fontL,
  },
});

const TextCustom = ({
  children,
  style,
  onPress,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | any;
  onPress?: () => void;
}) => {
  const customStyle: any = StyleSheet.flatten([styles.text, style]);
  return (
    <Text style={[styles.text, customStyle]} onPress={onPress}>
      {children}
    </Text>
  );
};

TextCustom.defaultProps = {
  style: StyleSheet.create({}),
  onPress: undefined,
};

export default TextCustom;
