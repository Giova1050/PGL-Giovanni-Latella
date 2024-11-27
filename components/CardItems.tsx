import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SPARKLETHEME } from "../styles/colors";
import { Item } from "../data/Items";

export type CardItemProps = {
  product: Item;
  onDelete: (id: string) => void;
};

export const CardItems = ({ product, onDelete }: CardItemProps) => {
  const getImage = (category: string) => {
    const img: { [key: string]: any } = {
      panaderia: require("../assets/img/panaderia.jpg"),
      bebidas: require("../assets/img/bebidas.jpg"),
      enlatados: require("../assets/img/enlatados.jpg"),
      carnes: require("../assets/img/carnes.jpg"),
      pescados: require("../assets/img/pescados.jpg"),
      "frutas/verduras": require("../assets/img/frutasverduras.jpg"),
    };
    return img[category.toLowerCase()] || require("../assets/img/otros.jpg");
  };

  return (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={getImage(product.category)}
      />
      <View style={styles.space}>
        <Text style={styles.text}>Nombre:{product.name}</Text>
        <Text style={styles.text}>Precio: {product.price.toFixed(2)}€</Text>
      </View>
      <View style={styles.space}>
        <Text style={styles.text}>Categoría: {product.category}</Text>
        <Text style={styles.text}>Cantidad: {product.amount}</Text>
      </View>
      <TouchableOpacity style={styles.checkbox}>
        <Text style={styles.text}>✔</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onDelete(product.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardItems;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
    width: 355,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 1,
    padding: 10,
    width: 355,
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: "#aaa",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  space: {
    flex: 1,
  },
  text: {
    fontSize: 11,
    color: "#fff",
  },
  checkbox: {
    marginHorizontal: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: SPARKLETHEME.blanco,
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontSize: 14,
  },
});
