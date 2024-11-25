import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LIGHTTHEME } from "../../styles/colors";
import { Link } from "expo-router";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../../assets/img/Saberpfp.jpg")}
      />
      <Text style={styles.welcomeText}>
        Bienvenido a mi portfolio Aquí puedes ver la información sobre mi
      </Text>
      <Link href="/profile" style={styles.button1}>
        Entrar al portfolio
      </Link>
      <Link href="" style={styles.button2}>
        Entrar a la lista de compras 
      </Link>
      <Image
        style={styles.sword}
        source={require("../../assets/img/Excalibur.png")}
      />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTTHEME.azulclaro,
  },
  avatar: {
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 100,
    marginTop: 130,
  },
  sword: {
    alignSelf: "center",
    flex: 1,
    width: 125,
    height: 125,
    resizeMode: "contain",
  },
  statusBar: {
    backgroundColor: LIGHTTHEME.plateado,
  },
  button1: {
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: LIGHTTHEME.verde,
    padding: 5,
    width: 150,
    height: 30,
    margin: 20,
  },
  button2: {
    fontSize: 11,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: LIGHTTHEME.rosado,
    padding: 5,
    width: 150,
    height: 30,
    margin: 20,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 16,
    backgroundColor: LIGHTTHEME.amarillo,
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 25,
    margin: 20,
  },
});
