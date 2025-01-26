import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LIGHTTHEME } from "../../styles/colors";
import { router } from "expo-router";
import loginRegisterService from "../../service/login-register-service";

const LoginPage = () => {
  const usuarioSeguro =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const [data, setData] = useState({
    usuario: "",
    contra: "",
  });

  const handleChange = (id: string, value: string) => {
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      data.usuario.trim() !== "" &&
      data.usuario !== undefined &&
      data.contra.trim() !== "" &&
      data.contra !== undefined
    ) {
      if (usuarioSeguro.test(data.usuario)) {
        console.log(data);
        try {
          const login = await loginRegisterService.login({
            usuario: data.usuario,
            contra: data.usuario,
          });
          if (login) {
            router.navigate("/(drawer)/welcome-page");
          } else {
            window.alert("Usuario o contraseña incorrectas");
          }
        } catch (err) {
          window.alert("Error al iniciar sesión");
        }
      } else {
        window.alert("El email no es válido");
      }
    } else {
      window.alert("Por favor, rellena todos los campos");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/LoginSaber.jpg")}
        style={styles.avatar}
      />
      <Text style={styles.title}>Inicio sesión</Text>
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
          onChangeText={(text) => handleChange("contra", text)}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={data.contra}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/user-management/register-page")}
      >
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
    marginTop: 15,
    marginBottom: 15,
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
