import { colorGreenStrong, colorShadow } from 'assets/colors';
import { bold, fontL } from 'assets/tokens';
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderColor: colorGreenStrong,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: colorGreenStrong,
    borderRadius: 10,
  },
  label: {
    paddingVertical: 10,
    fontSize: fontL,
    letterSpacing: 0,
    fontWeight: bold,
  },
  disabled: {
    borderWidth: 0,
  },
  text: {
    borderWidth: 0,
  },
});

const Button = ({
  mode,
  dark,
  compact,
  loading,
  disabled,
  children,
  uppercase,
  accessibilityLabel,
  accessibilityHint,
  onPress,
  onLongPress,
  style,
  labelStyle,
  testID,
  icon,
  contentStyle,
}: {
  mode?: 'text' | 'outlined' | 'contained';
  dark?: boolean;
  compact?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  uppercase?: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  testID: string;
  icon?: any;
  contentStyle?: StyleProp<ViewStyle>;
}) => (
  <ButtonPaper
    mode={mode}
    dark={dark}
    compact={compact}
    loading={loading}
    disabled={disabled}
    uppercase={uppercase}
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    onPress={onPress}
    onLongPress={onLongPress}
    style={[
      styles.button,
      style,
      disabled ? styles.disabled : {},
      mode === 'text' ? styles.text : {},
    ]}
    labelStyle={[styles.label, labelStyle]}
    testID={testID}
    icon={icon}
    contentStyle={contentStyle}
  >
    {children}
  </ButtonPaper>
);

Button.defaultProps = {
  mode: 'contained',
  dark: true,
  compact: false,
  loading: false,
  disabled: false,
  uppercase: false,
  onLongPress: undefined,
  style: {},
  labelStyle: {},
  icon: '',
  contentStyle: {},
};

export default Button;
