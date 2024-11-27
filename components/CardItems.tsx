import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React from "react";
import { SPARKLETHEME } from "../styles/colors";
import { Item } from "../data/Items";


export type CardItemProps = {
  product: Item;
  onDelete: (id: string) => void;
}

export const CardItems = ({product, onDelete}: CardItemProps) => {

  return (
      <View style={styles.item}>
          <Image style={styles.img} source={require("../assets/img/panaderia.jpg")} />
        <View style={styles.space}>
          <Text style={styles.text}>Nombre: </Text>
          <Text style={styles.text}>Precio: €</Text>
        </View>
        <View style={styles.space}>
        <Text style={styles.text}>Categoría: </Text>
        <Text style={styles.text}>Cantidad: </Text>
        </View>
        <TouchableOpacity style={styles.checkbox}>
          <Text style={styles.text}>✔</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(product.id)} style={styles.deleteButton}>
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
    marginBottom: 10,
    padding: 10,
    width: 355
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
    backgroundColor: SPARKLETHEME.blanco
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
