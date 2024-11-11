import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { DARKTHEME, LIGHTTHEME } from "../styles/colors";

export type ScrollProps = {
  title: string;
  imgSource: ImageSourcePropType;
};


const Card = ({ title, imgSource }: ScrollProps) => {
  return (
    <>
      <View
        style={[
          styles.scrollContainerStyle
        ]}
      >
        <Image style={styles.avatarCard} source={imgSource} />
        <Text
          style={[
            styles.text
          ]}
        >
          {title}
        </Text>
        <Image style={styles.reversedAvatar} source={imgSource} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
  scrollContainerStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: LIGHTTHEME.azuloscuro
  },
  avatarCard: {
    marginTop: 12,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  reversedAvatar: {
    alignSelf: "flex-end",
    marginBottom: 20,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: -32,
    marginBottom: -44.5,
  },
});

export default Card;
