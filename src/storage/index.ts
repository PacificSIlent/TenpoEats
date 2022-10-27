import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
  } catch (e) {
    console.error(`Error: Storage > storeData > key: ${key}, values: ${JSON.stringify(value)}`);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error: Storage > getData > key: ${key}`);
  }
};
