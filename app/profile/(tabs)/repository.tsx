import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const RepositoryPage = () => {
  return (
    <View>
      <QRCode value="https://github.com/Giova1050" />
      <Text>Aqui va el qrcode</Text>
    </View>
  );
};

export default RepositoryPage;

const styles = StyleSheet.create({});
