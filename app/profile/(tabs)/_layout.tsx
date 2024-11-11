import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { LIGHTTHEME } from "../../../styles/colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: LIGHTTHEME.verde,
        header: () => <Text></Text>,
      }}
    >
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: () => <Entypo name="list" />,
        }}
      />
      <Tabs.Screen
        name="repository"
        options={{
          title: "Repository",
          tabBarIcon: () => <Entypo name="github" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});