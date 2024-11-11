import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from 'react-native-qrcode-svg';



const RepositoryPage = () => {
  return (
    <View>
      <QRCode value="https://www.youtube.com/" />
    </View>
  );
};

export default RepositoryPage;

const styles = StyleSheet.create({});