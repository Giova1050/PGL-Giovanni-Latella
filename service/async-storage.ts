import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "@user";

const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem(KEY, value);
    console.log("Valor guardado correctamente", value);
  } catch (e) {
    console.error("Error al guardar el valor:", e);
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
