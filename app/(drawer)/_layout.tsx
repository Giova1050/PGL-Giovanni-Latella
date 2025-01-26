import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import asyncStorageService from "../../service/async-storage";
import { router } from "expo-router";

const DrawerLayout = () => {

  const handleLogout = async () => {
    try {
        await asyncStorageService.removeData("token");
        router.navigate("/login/LoginPage");
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { maxHeight: "100%" },
        }}
      >
        <Drawer.Screen
          name="welcome-page"
          options={{
            drawerLabel: "Principal",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Portfolio",
            title: "Portfolio",
          }}
        />
        <Drawer.Screen
          name="shopping-list-page"
          options={{
            drawerLabel: "Lista de compra",
            title: "Lista de compra",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
