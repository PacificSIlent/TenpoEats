import {
  colorBlack,
  colorGrayLight,
  colorGrayStrong,
  colorShadow,
  colorWhite,
} from 'assets/colors';
import { book, fontL, fontM, fontS } from 'assets/tokens';
import { Text } from 'components';
import { GOOGLE_API_KEY } from 'config/env.json';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
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
  onPress,
  onFocus,
  onBlur,
  onChangeText,
}: {
  onPress: (data: any, details: any) => void;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: () => void;
}) => {
  const { t } = useTranslation();
  const ref: any = useRef();
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
      renderRow={(data, index) => (
        <View style={styles.addressCnt} key={index}>
          <Text style={styles.address}>{data.structured_formatting.main_text}</Text>
          <Text style={styles.addressSecondary}>{data.structured_formatting.secondary_text}</Text>
        </View>
      )}
    />
  );
};

export default SearchAddress;
