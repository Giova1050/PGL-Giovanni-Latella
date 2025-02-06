import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { DARKTHEME } from "../../styles/colors";
import { router } from "expo-router";
import loginService from "../../service/login-register-service";

const RegisterPage = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const usuarioSeguro =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const contraSegura = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleChange = (id: string, value: string) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      data.fullname.trim() != "" &&
      data.fullname !== undefined &&
      data.email.trim() != "" &&
      data.email !== undefined &&
      data.password.trim() != "" &&
      data.password !== undefined
    ) {
      if (usuarioSeguro.test(data.email) && contraSegura.test(data.password)) {
        await loginService.register({
          fullname: data.fullname,
          email: data.email,
          password: data.password,
        });
        console.log("Navegando al login...");
        router.navigate("./login-page");
      } else {
        window.alert("Datos incorrectos");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/RegisterSaber.jpg")}
        style={styles.avatar}
      />
      <Text style={styles.title}>Registro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("fullname", text)}
          placeholder="Nombre completo"
          value={data.fullname}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Usuario"
          value={data.email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry={true}
          value={data.password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/user-management/login-page")}
      >
        <Text style={styles.signUp}>
          Tienes una cuenta?
          <Text style={styles.signUpLink}> Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPage;

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
