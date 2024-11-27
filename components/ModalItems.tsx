import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Item } from "../data/Items";
import RNPickerSelect from "react-native-picker-select";
import { SPARKLETHEME } from "../styles/colors";

const categories = [
  { label: "Panaderia", value: "panaderia" },
  { label: "Bebidas", value: "bebidas" },
  { label: "Enlatados", value: "enlatados" },
  { label: "Carnes", value: "carnes" },
  { label: "Pescados", value: "pescados" },
  { label: "Frutas/Verduras", value: "frutas/verduras" },
  { label: "Otros", value: "otros" },
];

export type ModalItemsProps = {
  visible: boolean;
  newItems?: Item | null;
  onNew: (product: Item) => void;
  onModal: () => void;
};

const ModalItems = ({ visible, newItems, onNew, onModal }: ModalItemsProps) => {
  const [ItemsData, setItemsData] = useState({
    name: "",
    category: "otros",
    amount: "",
    price: "",
  });

  const handleOpenModal = () => {
    if (newItems) {
      setItemsData({
        name: newItems?.name || "",
        category: newItems?.category || "otros",
        amount: newItems?.amount.toString() || "",
        price: newItems?.price.toString() || "",
      });
    } else {
      setItemsData({
        name: "",
        category: "otros",
        amount: "",
        price: "",
      });
    }
  };

  const handleCheckItems = () => {
    if (
      !ItemsData.name ||
      !ItemsData.category ||
      !ItemsData.amount ||
      !ItemsData.price
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onNew({
      id: newItems?.id || "",
      name: ItemsData.name,
      category: ItemsData.category,
      amount: parseInt(ItemsData.amount),
      price: parseFloat(ItemsData.price),
      checked: newItems?.checked || false,
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onShow={handleOpenModal}
    >
      <View style={styles.container}>
        <Text>{newItems ? "Editar" : "Añadir"}</Text>
        <TextInput
          style={styles.input}
          value={ItemsData.name}
          onChangeText={(text) => setItemsData({ ...ItemsData, name: text })}
          placeholder="Nombre del producto"
        />
        <TextInput
          style={styles.input}
          value={ItemsData.amount}
          keyboardType="numeric"
          onChangeText={(text) => setItemsData({ ...ItemsData, amount: text })}
          placeholder="Cantidad"
        />
        <TextInput
          style={styles.input}
          value={ItemsData.price}
          keyboardType="numeric"
          onChangeText={(text) => setItemsData({ ...ItemsData, price: text })}
          placeholder="Precio"
        />
        <View style={styles.select}>
          <Text style={styles.category}>Seleccione una Categoría :</Text>
          <RNPickerSelect
            onValueChange={(value) =>
              setItemsData({ ...ItemsData, category: value })
            }
            items={categories}
            value={ItemsData.category}
            placeholder={{ label: "CATEGORiAS: ", value: null }}
            style={{
              inputAndroid: styles.picker,
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCheckItems}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onModal} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalItems;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: SPARKLETHEME.rosado,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: SPARKLETHEME.rojo,
    marginVertical: "50%",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  select: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    backgroundColor: SPARKLETHEME.blanco,
    width: 100,
    borderRadius: 10
  },
  category: {
    width: "60%",
    marginVertical: 15,
    borderRightColor: SPARKLETHEME.negro,
    fontSize: 14,
    marginLeft: 3,
  },
  buttonContainer: {
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: SPARKLETHEME.negro,
    padding: 5,
    fontSize: 12,
    width: 120,
    textAlign: "center",
    borderRadius: 3,
    marginBottom: 5,
  },
  saveButtonText: {
    color: SPARKLETHEME.beige,
    textAlign: "center",
  },
  cancelButton: {
    backgroundColor: SPARKLETHEME.negro,
    padding: 5,
    fontSize: 12,
    width: 120,
    textAlign: "center",
    borderRadius: 3,
  },
  cancelButtonText: {
    color: SPARKLETHEME.beige,
    textAlign: "center",
  },
});
