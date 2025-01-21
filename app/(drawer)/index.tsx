import { StyleSheet, View } from "react-native";
import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: { maxHeight: "100%" },
          }}
        >
          <Drawer.Screen
            name="welcome/welcomePage"
            options={{
              drawerLabel: "Bienvenida",
              title: "Bienvenida",
            }}
          />
          <Drawer.Screen
            name="profile/Profile"
            options={{
              drawerLabel: "Portafolio Personal",
              title: "Portfolio",
            }}
          />
          <Drawer.Screen
            name="shoppingList/ShoppingList"
            options={{
              drawerLabel: "Lista de Compra",
              title: "Lista de compras",
            }}
          />
        </Drawer>
      </View>
    </GestureHandlerRootView>
  );
};

export default Layout;
