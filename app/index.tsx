import React from "react";
import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <Redirect href="/welcome/WelcomePage" />
    </>
  );
}

const styles = StyleSheet.create({});
