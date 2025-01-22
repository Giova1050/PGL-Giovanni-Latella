import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const RegisterPage = () => {
  const onRegister = () => {
    router.navigate("./login-page");
  };

  return (
    <View>
      <Text>~RegisterPage</Text>
      <Button onPress={onRegister} title="Registrarse" />
    </View>
  );
};

export default RegisterPage;
const styles = StyleSheet.create({});
