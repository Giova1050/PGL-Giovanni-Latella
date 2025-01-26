import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { DARKTHEME, LIGHTTHEME } from "../../styles/colors";
import { router } from "expo-router";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/RegisterSaber.jpg")}
        style={styles.avatar}
      />
      <Text style={styles.title}>Registro</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nombre completo"  />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Usuario" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/user-management/login-page")}
      >
        <Text style={styles.signUp}>
          Tienes una cuenta?{" "}
          <Text style={styles.signUpLink}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: DARKTHEME.grisclaro,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "bold",
    color: DARKTHEME.negro,
  },
  input: {
    flex: 1,
    height: "100%",
    
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: DARKTHEME.rojo,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: DARKTHEME.dorado,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
  signUp: {
    color: DARKTHEME.beige,
  },
  signUpLink: {
    color: DARKTHEME.rojo,
  },
  avatar: {
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 100,
  },
});
