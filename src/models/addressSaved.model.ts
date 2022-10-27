export interface AddressSaved {
  address: string;
  coords: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  aditionalInfo: string;
}
