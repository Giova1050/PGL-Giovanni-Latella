import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { LIGHTTHEME } from "../../styles/colors";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/LoginSaber.jpg")} style={styles.avatar} />
      <Text style={styles.title}>Inicio sesión</Text>
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
      <TouchableOpacity>
        <Text style={styles.signUp}>
          No tienes cuenta? <Text style={styles.signUpLink}>Registrate</Text>
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
    backgroundColor: LIGHTTHEME.azulclaro,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    color: "black",
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
    backgroundColor: LIGHTTHEME.plateado,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: LIGHTTHEME.amarillo,
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
    color: "#000",
  },
  signUpLink: {
    color: LIGHTTHEME.verde,
  },
  avatar: {
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 100,
  },
});
