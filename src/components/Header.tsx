import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colorGreen } from 'assets/colors';
import { Search } from 'assets/images';
import { RouteParamList } from 'navigation';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Address } from 'screens/HomeScreen/components';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 30,
  },
  actions: {
    flexDirection: 'row',
  },
  actionsitem: {
    marginLeft: 24,
    position: 'relative',
  },
});

const Header = ({ navigation }: { navigation: NativeStackNavigationProp<RouteParamList> }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BackButton navigationFunction={goBack} />
      <Address />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.actionsitem}>
            <Search color={colorGreen} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
