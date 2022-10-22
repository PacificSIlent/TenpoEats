import { colorGray, colorGreenLight, colorRedError, colorWhite } from 'assets/colors';
import { book, fontL, fontS } from 'assets/tokens';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const inputStyles = StyleSheet.create({
  input: {
    fontSize: fontL,
    color: colorGray,
    height: 50,
  },
  inputError: {
    marginBottom: 20,
  },
  error: {
    fontSize: fontS,
    fontWeight: book,
    color: colorRedError,
  },
});

const Input = ({
  testID,
  mode,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  style,
  touched,
  error,
  disabled,
  left,
  right,
  secureTextEntry,
  multiline,
  autoCapitalize,
  keyboardType,
  autoCorrect,
}: {
  testID: string;
  mode?: 'outlined' | 'flat';
  label: string;
  placeholder: string;
  value: any;
  onChange?: (event: any) => void;
  onBlur?: (event?: any) => void;
  onFocus?: (event: any) => void;
  style?: StyleProp<ViewStyle>;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
  left?: any;
  right?: any;
  secureTextEntry?: boolean;
  multiline?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  autoCorrect?: boolean;
}) => {
  const hasError = touched && Boolean(error);

  return (
    <>
      <TextInput
        secureTextEntry={secureTextEntry}
        theme={{
          roundness: 4,
          colors: { background: !disabled ? colorWhite : colorGreenLight },
        }}
        style={[inputStyles.input, style, hasError ? {} : inputStyles.inputError]}
        testID={testID}
        mode={mode}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={hasError}
        disabled={disabled}
        left={left}
        right={right}
        onFocus={onFocus}
        outlineColor={colorGray}
        activeOutlineColor={colorGreenLight}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
      />
      {hasError ? (
        <HelperText
          style={inputStyles.error}
          type="error"
          visible={hasError}
          testID={`${testID}-error`}
        >
          {error}
        </HelperText>
      ) : null}
    </>
  );
};

Input.defaultProps = {
  mode: 'outlined',
  disabled: false,
  style: {},
  touched: false,
  error: null,
  left: null,
  right: null,
  secureTextEntry: false,
  onFocus: () => {},
  onChange: () => {},
  onBlur: () => {},
  multiline: false,
  autoCapitalize: undefined,
  keyboardType: 'default',
  autoCorrect: undefined,
};

export default Input;
