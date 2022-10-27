import {
  colorBlack,
  colorGrayLight,
  colorGrayStrong,
  colorGreen,
  colorShadow,
  colorWhite,
} from 'assets/colors';
import { Geolocation } from 'assets/icons';
import { book, fontL, fontM, fontS } from 'assets/tokens';
import { Text } from 'components';
import { GOOGLE_API_KEY } from 'config/env.json';
import { AddressSaved } from 'models';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const styles = StyleSheet.create({
  addressCnt: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
  },
  address: {
    fontSize: fontM,
    color: colorBlack,
    fontWeight: book,
    maxWidth: '90%',
    marginBottom: 5,
  },
  addressSecondary: {
    fontSize: fontS,
    color: colorGrayStrong,
    fontWeight: book,
    maxWidth: '90%',
  },
  addressGps: {
    paddingVertical: 10,
  },
  locationButton: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    backgroundColor: colorGreen,
    opacity: 0.8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

const googlePlacesStyle = {
  container: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textInputContainer: {
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: colorWhite,
    marginTop: 0,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textInput: {
    marginTop: 5,
    color: colorBlack,
    fontSize: fontL,
    fontWeight: book,
    fontFamily: 'Gotham',
  },
  listView: {
    marginTop: 20,
  },
};

const SearchAddress = ({
  addressSaved,
  onPress,
  onFocus,
  onBlur,
  onChangeText,
}: {
  addressSaved?: AddressSaved;
  onPress: (data: any, details: any) => void;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: () => void;
}) => {
  const ref: any = useRef();
  const { t } = useTranslation();

  const onLocationPress = () => {
    ref.current.getCurrentLocation();
    ref.current.clear();
    ref.current.focus();
  };

  useEffect(() => {
    if (!!addressSaved) {
      ref.current.setAddressText(addressSaved.address);
    } else {
      ref.current.getCurrentLocation();
      ref.current.focus();
    }
  }, [addressSaved]);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      GooglePlacesDetailsQuery={{ fields: 'geometry' }}
      fetchDetails={true}
      onPress={onPress}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
      enablePoweredByContainer={false}
      textInputProps={{
        onFocus,
        onBlur,
        onChangeText,
        placeholderTextColor: colorGrayLight,
      }}
      placeholder={t('addAddress.placeholder')}
      styles={googlePlacesStyle}
      renderRightButton={() => (
        <TouchableOpacity onPress={onLocationPress} style={styles.locationButton}>
          <Geolocation />
        </TouchableOpacity>
      )}
      renderRow={(data: any, index) => (
        <View style={styles.addressCnt} key={index}>
          {!!data?.structured_formatting?.main_text &&
          !!data?.structured_formatting?.secondary_text ? (
            <>
              <Text style={styles.address}>{data?.structured_formatting?.main_text || ''}</Text>
              <Text style={styles.addressSecondary}>
                {data?.structured_formatting?.secondary_text || ''}
              </Text>
            </>
          ) : (
            <>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.addressGps}>
                {data?.formatted_address || ''}
              </Text>
            </>
          )}
        </View>
      )}
      isRowScrollable={false}
      currentLocation
      currentLocationLabel={t('addAddress.currentLocationLabel')}
      filterReverseGeocodingByTypes={['geocode', 'street_address', 'street_number']}
      nearbyPlacesAPI="GoogleReverseGeocoding"
    />
  );
};

SearchAddress.defaultProps = {
  addressSaved: undefined,
};

export default SearchAddress;
