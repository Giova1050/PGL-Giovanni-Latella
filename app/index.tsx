import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from "expo-router";
import { ImageSourcePropType, StyleSheet, Text, View, Image } from 'react-native';


export type WelcomeProps = {
  info: string;
  img: ImageSourcePropType;
}

export default function App({info, img}: WelcomeProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.avatar} source={img}/>
        <Text>{info}</Text>
        <Link href="./profile">Entrar al portfolio</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
});