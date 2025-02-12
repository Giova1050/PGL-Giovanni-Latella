import { useEffect } from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import asyncStorageService from "../service/async-storage";

export default function App() {
  useEffect(() => {
    const getSavedUserToken = async () => {
      const token = await asyncStorageService.getData();
      const isTokenValid = true;
      if (token != null && isTokenValid) {
        router.navigate("/(drawer)/welcome-page");
      } else {
        router.navigate("/user-management/login-page");
      }
    };
    getSavedUserToken();
  }, []);
  return;
}

const styles = StyleSheet.create({});
