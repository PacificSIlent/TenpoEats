import { colorGray, colorGreenLight, colorRedError, colorWhite } from 'assets/colors';
import { book, fontL, fontS } from 'assets/tokens';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const inputStyles = StyleSheet.create({
  input: {
    fontSize: fontL,
    color: colorGray,
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
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  style,
  touched,
  error,
  multiline,
  keyboardType,
}: {
  label?: string;
  placeholder?: string;
  value: any;
  onChange?: (event: any) => void;
  onBlur?: (event?: any) => void;
  onFocus?: (event: any) => void;
  style?: StyleProp<ViewStyle>;
  touched?: boolean;
  error?: string;
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
        mode="outlined"
        theme={{
          roundness: 20,
          colors: { background: colorWhite },
        }}
        style={[inputStyles.input, style, hasError ? {} : inputStyles.inputError]}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={hasError}
        onFocus={onFocus}
        outlineColor={colorGray}
        activeOutlineColor={colorGreenLight}
        multiline={multiline}
        keyboardType={keyboardType}
      />
      {hasError ? (
        <HelperText style={inputStyles.error} type="error" visible={hasError}>
          {error}
        </HelperText>
      ) : null}
    </>
  );
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  style: {},
  touched: false,
  error: null,
  onFocus: () => {},
  onChange: () => {},
  onBlur: () => {},
  multiline: false,
  keyboardType: 'default',
};

export default Input;
