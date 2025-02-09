import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
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
        <Drawer.Screen
          name="camera-page"
          options={{
            drawerLabel: "Camara",
            title: "Camara",
          }}
        />
        <Drawer.Screen
          name="logout"
          options={{
            drawerLabel: "Salir",
            title: "Salir",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
