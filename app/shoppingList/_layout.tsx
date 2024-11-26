import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SPARKLETHEME } from "../../styles/colors";
import CardItems from "../../components/CardItems";


const shoppingListScreen = () => {

  const Categories = ["Panaderia", "Bebidas", "Enlatados", "Carnes", "Pescados", "Frutas/Verduras", "Otros"];

  const [items, setItems] = useState([
    { id: 1, name: 'Pan', category: 'Panaderia', amount: 2, price: 1, checked: false },
    { id: 2, name: 'Pepsi', category: 'Bebidas', amount: 1, price: 2, checked: false },
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    category: '', 
    amount: '',
    price: '',
  });



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
            <CardItems/>
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
