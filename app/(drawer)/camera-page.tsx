import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ImageType } from "../../types/ImageType";
import asyncStorageService from "../../service/async-storage";
import { LIGHTTHEME } from "../../styles/colors";

const CameraPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [openCamera, setOpenCamera] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);

  

  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LIGHTTHEME.azulclaro,
        paddingHorizontal: 50,
      },
});
