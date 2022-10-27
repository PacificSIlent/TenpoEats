import { useNavigation } from '@react-navigation/native';
import { colorGreenLight, colorWhite } from 'assets/colors';
import { globalStyles } from 'assets/styles';
import { KeyboardScroll } from 'components';
import { AddressSaved } from 'models';
import { RouteStackNavigation } from 'navigation';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState, saveAddress, useAppDispatch } from 'store';
import { FormAddress, SearchAddress } from './components';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colorGreenLight,
    paddingTop: 10,
  },
  container: {
    position: 'relative',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    zIndex: 0,
    backgroundColor: colorWhite,
  },
  mapCnt: {
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  formCnt: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
});

const AddAddress = () => {
  const navigation = useNavigation<RouteStackNavigation>();
  const dispatch = useAppDispatch();

  const addressSaved = useSelector((state: RootState) => state.global.addressSaved);

  const [addressSelected, setAddressSelected] = useState<{ details: any; data: any } | undefined>(
    undefined,
  );
  const [coordsMap, setCoordsMap] = useState<any>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const [markers, setMarkers] = useState<any[]>([]);

  const [mapVisible, setMapVisible] = useState<boolean>(false);
  const [mapReady, setMapReady] = useState<boolean>(false);

  const onPress = (data: any, details: any = null) => {
    setAddressSelected({ details, data });
  };

  const onFocus = () => {
    setMapVisible(false);
  };

  const onBlur = () => {
    if (addressSelected) {
      setMapVisible(true);
    }
  };

  const onChangeText = () => {
    setAddressSelected(undefined);
    setMapVisible(false);
  };

  const onSubmit = (values: any) => {
    let addressText = '';
    if (!!addressSelected?.data.description) {
      addressText = addressSelected?.data.description;
    } else if (!!addressSelected?.data.formatted_address) {
      addressText = addressSelected?.data.formatted_address;
    }

    const address: AddressSaved = {
      address: addressText,
      coords: {
        latitude: addressSelected?.details.geometry.location.lat,
        longitude: addressSelected?.details.geometry.location.lng,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      aditionalInfo: values.aditionalInfo,
    };
    dispatch(saveAddress(address));
    navigation.goBack();
  };

  useEffect(() => {
    if (!!addressSelected) {
      const cords = {
        latitude: addressSelected.details.geometry.location.lat,
        longitude: addressSelected?.details.geometry.location.lng,
        latitudeDelta: 0,
        longitudeDelta: 0,
      };
      setCoordsMap(cords);
      setMarkers([
        <Marker
          key={`${addressSelected?.data.description}_key`}
          coordinate={cords}
          title={addressSelected?.data.description}
          image={{ uri: 'mappin' }}
        />,
      ]);
      setMapVisible(true);
    }
  }, [addressSelected]);

  useEffect(() => {
    if (!!addressSaved && !addressSelected && mapReady) {
      setCoordsMap(addressSaved.coords);
      setMarkers([
        <Marker
          key={`${addressSaved.address}_key`}
          coordinate={addressSaved.coords}
          title={addressSaved.address}
          image={{ uri: 'mappin' }}
        />,
      ]);
      setMapVisible(true);
    }
  }, [addressSaved, mapReady]);

  return (
    <View style={[globalStyles.page, styles.page]}>
      <View style={styles.container}>
        <SearchAddress
          addressSaved={addressSaved}
          onPress={onPress}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChangeText}
        />
        <KeyboardScroll
          style={{
            zIndex: -1,
            display: mapVisible ? 'flex' : 'none',
          }}
        >
          <View style={[styles.mapCnt, { height: !!addressSelected ? '40%' : '100%' }]}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={coordsMap}
              maxZoomLevel={18}
              onMapReady={() => setMapReady(true)}
            >
              {mapVisible ? markers.map((marker) => marker) : null}
            </MapView>
          </View>
          <View style={[styles.formCnt, { display: mapVisible ? 'flex' : 'none' }]}>
            {mapVisible ? <FormAddress onSubmit={onSubmit} /> : null}
          </View>
        </KeyboardScroll>
      </View>
    </View>
  );
};

export default AddAddress;
