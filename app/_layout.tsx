import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const AppLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
