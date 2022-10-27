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
  numberOfLines,
  ellipsizeMode,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle> | any;
  onPress?: () => void;
  numberOfLines?: number;
  ellipsizeMode?: 'tail' | 'head' | 'middle' | 'clip' | undefined;
}) => {
  const customStyle: any = StyleSheet.flatten([styles.text, style]);
  return (
    <Text
      style={[styles.text, customStyle]}
      onPress={onPress}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

TextCustom.defaultProps = {
  style: StyleSheet.create({}),
  onPress: undefined,
  numberOfLines: undefined,
  ellipsizeMode: undefined,
};

export default TextCustom;
