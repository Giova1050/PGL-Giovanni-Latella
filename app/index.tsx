import { StatusBar } from "expo-status-bar";
import React from "react";
import { Link } from "expo-router";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { LIGHTTHEME } from "../styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../assets/img/Saberpfp.jpg")}
      />
      <Text style={styles.welcomeText}>
        Bienvenido a mi portfolio Aquí puedes ver la información sobre mi
      </Text>
      <Link href="./profile" style={styles.button}>
        Entrar al portfolio
      </Link>
      <Image
        style={styles.sword}
        source={require("../assets/img/Excalibur.png")}
      />
    </View>
  );
}

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
    resizeMode: 'contain'
    
  },
  statusBar: {
    backgroundColor: LIGHTTHEME.plateado,
  },
  button: {
    alignSelf: "center",
    textAlign: 'center',
    backgroundColor: LIGHTTHEME.verde,
    padding: 5,
    width: 150,
    height: 30,
    margin: 20,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: LIGHTTHEME.amarillo,
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 25,
    margin: 20,
  }
});
