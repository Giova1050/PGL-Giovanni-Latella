import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { LIGHTTHEME } from "../../../styles/colors";

const TabsLayout = () => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.textStyle}>Descripción sobre mí!</Text>
        <Text>
          Soy Giovanni, un chico pensador que le gustar conmigo mismo y me gusta
          la programacion aunque me cueste y lo intento entender porque me
          gusta.
        </Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: LIGHTTHEME.verde,
          header: () => <Text></Text>
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
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  card: {
    margin: 10,
    backgroundColor: LIGHTTHEME.amarillo,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  }
});
