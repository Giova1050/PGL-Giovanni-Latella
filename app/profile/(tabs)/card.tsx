import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { scrolls } from "../../../data/Scrolls";
import Scroll, { ScrollProps } from "../../../components/Card";
import { LIGHTTHEME } from "../../../styles/colors";

const card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.textStyle}>Descripción sobre mí!</Text>
        <Text>
          Soy Giovanni, un chico pensador que le gustar conmigo mismo y me gusta
          la programacion aunque me cueste y lo intento entender porque me
          gusta.
        </Text>
      </View>

      <FlatList
        data={scrolls}
        renderItem={({ item }) => (
          <Scroll title={item.title} imgSource={item.imgSource} />
        )}
        keyExtractor={(item, index) => `${index}-${item.title}`}
      />
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 18,
    backgroundColor: LIGHTTHEME.azulmarino
  },
  card: {
    margin: 10,
    backgroundColor: LIGHTTHEME.amarillo,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
