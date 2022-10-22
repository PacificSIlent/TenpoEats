import { colorBlack } from 'assets/colors';
import { bold, fontXl } from 'assets/tokens';
import { ScrollView } from 'components';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
  },
  title: {
    fontSize: fontXl,
    fontWeight: bold,
    color: colorBlack,
    marginBottom: 10,
  },
  scroll: {
    overflow: 'visible',
    width: '100%',
  },
});

const Section = ({
  title,
  style,
  children,
}: {
  title: string;
  children: any;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.section, style]}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

Section.defaultProps = {
  style: StyleSheet.create({}),
};

export default Section;
