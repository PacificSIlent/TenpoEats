import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  content: {
    width: '100%',
  },
  contentContainerStyle: {
    flex: 1,
  },
});

const KeyboardScroll = ({
  style,
  contentContainerStyle,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) => (
  <KeyboardAwareScrollView
    style={[styles.content, style]}
    extraScrollHeight={30}
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
  >
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardScroll;
