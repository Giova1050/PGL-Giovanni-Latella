import React from "react";
import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function App() {
  return <Redirect href="/welcome" />;
}

const styles = StyleSheet.create({});
