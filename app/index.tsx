import { useEffect } from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function App() {
  /* const USER_TOKEN_KEY = asyncStorageService.KEYS.userToken; */
  let isUserTokenSaved = false;

  useEffect(() => {
    const getSavedUserToken = async () => {
      // const token = await asyncStorageService.get<string>(USER_TOKEN_KEY);
      const token = null; // La buena es la anterior, esta es solo para entrar en el drawer
      const isTokenValid = true;
      if (token != null && isTokenValid) {
        isUserTokenSaved = true;
        router.navigate("/(drawer)/welcome-page");
      } else {
        router.navigate("/user-management/login-page");
      }
    };

    getSavedUserToken();
  }, []);
}

const styles = StyleSheet.create({});
