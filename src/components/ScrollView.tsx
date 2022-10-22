import React from 'react';
import { ScrollView as NativeScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  content: {
    paddingBottom: 0,
    paddingHorizontal: 0,
    width: '100%',
    flexGrow: 1,
  },
});

const ScrollView = ({
  children,
  style,
  contentContainerStyle,
  testID,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}) => (
  <NativeScrollView
    style={[styles.scrollView, style]}
    contentContainerStyle={[styles.content, contentContainerStyle]}
    keyboardDismissMode="on-drag"
    testID={testID}
  >
    {children}
  </NativeScrollView>
);

ScrollView.defaultProps = {
  style: StyleSheet.create({}),
  contentContainerStyle: StyleSheet.create({}),
  testID: '',
};

export default ScrollView;
