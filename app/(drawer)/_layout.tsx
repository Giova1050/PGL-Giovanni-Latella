import React from "react";
import { Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
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
