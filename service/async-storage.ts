import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "@user";

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    return value;
  } catch (error) {
    console.error("Error al obtener el valor de la clave:", error);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Key "${key}" removed successfully.`);
  } catch (error) {
    console.error(`Failed to remove key "${key}":`, error);
  }
};

const asyncStorageService = { storeData, getData, removeData };

export default asyncStorageService;
