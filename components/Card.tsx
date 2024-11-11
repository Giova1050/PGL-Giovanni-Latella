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
    themes: boolean;
  };

  const [themes, setThemes] = useState(true);
  
const Card = ({title, imgSource}: ScrollProps) => {
  return (
    <><View style={styles.cardContainer}>
          <Image
              style={styles.avatarCard}
              source={imgSource} />
          <View style={styles.card}>
              <Text style={styles.textStyle}></Text>
              <Text>

              </Text>
          </View>
      </View><View style={[styles.scrollContainerStyle,
      { backgroundColor: themes ? LIGHTTHEME.amarillo : DARKTHEME.beige }]}>
              <Image
                  style={styles.avatarCard}
                  source={imgSource} />
              <Text style={[styles.text,
              { color: themes ? LIGHTTHEME.amarillo : DARKTHEME.beige }]}>{title}</Text>
              <Image
                  style={styles.reversedAvatar}
                  source={imgSource} />
          </View></>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18
  },
  card: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  scrollContainerStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    
  },
  avatarCard: {
    marginTop: 12,
    height: 60,
    width: 60,
    borderRadius: 100
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
    marginBottom: -44.5
  }
});

export default Card;
