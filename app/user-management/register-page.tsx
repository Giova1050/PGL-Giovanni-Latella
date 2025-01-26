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
    nombre: "",
    usuario: "",
    contra: "",
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
      data.nombre.trim() != "" &&
      data.nombre !== undefined &&
      data.usuario.trim() != "" &&
      data.usuario !== undefined &&
      data.contra.trim() != "" &&
      data.contra !== undefined
    ) {
      if (usuarioSeguro.test(data.usuario) && contraSegura.test(data.contra)) {
        await loginService.register({
          nombre: data.nombre,
          usuario: data.usuario,
          contra: data.contra,
        });
        router.navigate("/user-management/login-page.tsx");
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
          onChangeText={(text) => handleChange("nombre", text)}
          placeholder="Nombre completo"
          value={data.nombre}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("usuario", text)}
          placeholder="Usuario"
          value={data.usuario}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => handleChange("contra", text)}
          secureTextEntry={true}
          value={data.contra}
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
