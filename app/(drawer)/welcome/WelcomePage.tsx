import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { DARKTHEME, LIGHTTHEME } from "../../../styles/colors";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RenderManagerContext } from "../../../context/RenderManagerContext";

const WelcomePage = () => {

  const { darkMode } = useContext(RenderManagerContext);

  return (
    <View style={[styles.container, {backgroundColor: darkMode ? DARKTHEME.negro : LIGHTTHEME.azulclaro},]}>
         <ExpoStatusBar style="auto" />
      <Image
        style={styles.avatar}
        source={require("../../../assets/img/Saberpfp.jpg")}
      />
      <Text style={[styles.welcomeText,
        {backgroundColor: darkMode ? DARKTHEME.rojo : LIGHTTHEME.amarillo},]}>
        Bienvenido a mi portfolio Aquí puedes ver la información sobre mi
      </Text>
      <Image
        style={styles.sword}
        source={require("../../../assets/img/Excalibur.png")}
      />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 25,
    margin: 20,
  },
});
