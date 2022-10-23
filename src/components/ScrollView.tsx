import React from 'react';
import { ScrollView as NativeScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
  },
  content: {
    paddingBottom: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
  },
});

const ScrollView = ({
  children,
  style,
  contentContainerStyle,
  testID,
  horizontal,
  showsHorizontalScrollIndicator,
  refreshControl,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  refreshControl?: React.ReactElement;
}) => (
  <NativeScrollView
    style={[styles.scrollView, style]}
    contentContainerStyle={[styles.content, contentContainerStyle]}
    keyboardDismissMode="on-drag"
    testID={testID}
    horizontal={horizontal}
    scrollEnabled
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    refreshControl={refreshControl}
  >
    {children}
  </NativeScrollView>
);

ScrollView.defaultProps = {
  style: StyleSheet.create({}),
  contentContainerStyle: StyleSheet.create({}),
  testID: '',
  horizontal: false,
  showsHorizontalScrollIndicator: true,
  refreshControl: undefined,
};

export default ScrollView;
