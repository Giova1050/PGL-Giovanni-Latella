import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SPARKLETHEME } from "../../styles/colors";
import CardItems from "../../components/CardItems";
import { Item } from "../../data/Items";

import { v4 as uuidv4 } from "uuid";
import 'react-native-get-random-values';

const shoppingListScreen = () => {

  const initialItems = () => [
    {
      id: uuidv4(),
      name: "Pan",
      category: "Panaderia",
      amount: 2,
      price: 1,
      checked: false,
    },
    {
      id: uuidv4(),
      name: "Agua",
      category: "Bebidas",
      amount: 1,
      price: 2,
      checked: false,
    },
  ];

  const [items, setItems] = useState<Item[]>(initialItems);

  const totalPrice = items.reduce(
    (acc, product) => (product.checked ? acc + product.amount * product.price : acc),
    0
);


  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleChecked = (id: string) => {
    setItems((element) =>
        element.map((product) =>
            product.id === id ? { ...product, checked: !product.checked } : product
        )
    );
};


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
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CardItems 
            product={item} 
            onDelete={handleDeleteItem} 
            onChecked={handleChecked}/>
          )}/>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Precio total: {totalPrice.toFixed(2)}€</Text>
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
    marginTop: 35,
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
    color: SPARKLETHEME.negro,
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
    marginBottom: 10,
  },
  textList: {
    fontSize: 16,
    color: SPARKLETHEME.negro,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 100,
  },
  footer: {
    backgroundColor: SPARKLETHEME.negro,
    padding: 18,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: SPARKLETHEME.blanco,
    marginBottom: 10,
  },
});

export default shoppingListScreen;
