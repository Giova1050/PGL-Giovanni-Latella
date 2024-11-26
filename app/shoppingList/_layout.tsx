import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SPARKLETHEME } from "../../styles/colors";

const shoppingListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de compras</Text>
      </View>
      <View style={styles.body}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
        <View style={styles.innerView}>
            <Image style={styles.sparkleImg} source={require("../../assets/img/sparkle.png")}/>
          <Text style={styles.textList}>La lista está vacía</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Precio total: 0€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPARKLETHEME.rojo,
  },
  header: {
    backgroundColor: SPARKLETHEME.blanco,
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: SPARKLETHEME.negro,
    marginTop: 35
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: SPARKLETHEME.beige,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: SPARKLETHEME.negro
  },
  innerView: {
    width: "90%",
    height: "85%",
    backgroundColor: SPARKLETHEME.rosado,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sparkleImg: {
    width: 125,
    height: 125,
    marginBottom: 10
  },
  textList: {
    fontSize: 16,
    color: SPARKLETHEME.negro,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 100
  },
  footer: {
    backgroundColor: SPARKLETHEME.negro,
    padding: 18,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: SPARKLETHEME.blanco,
    marginBottom: 10
  },
});

export default shoppingListScreen;
