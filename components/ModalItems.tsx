import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Item } from '../data/Items';

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
    onModal: () => void
}

const ModalItems = ({visible, newItems, onNew, onModal}: ModalItemsProps) => {

    const [ItemsData, setItemsData] = useState({
        name: "",
        category: "otros",
        amount: "",
        price: ""
    });

    const handleOpenModal = () => {
        if (newItems) {
            setItemsData({
                name: newItems?.name || "",
                category: newItems?.category || "otros",
                amount: newItems?.amount.toString() || "",
                price: newItems?. price.toString() || "",
            })
        }
    }

  return (
    <View>
        <Modal visible={visible} animationType='fade' transparent onShow={}
    </View>
  )
}

export default ModalItems

const styles = StyleSheet.create({})