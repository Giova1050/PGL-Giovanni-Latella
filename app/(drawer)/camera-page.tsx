import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useCallback, useState } from "react";
import asyncStorageService from "../../service/async-storage";
import { LIGHTTHEME } from "../../styles/colors";
import Camera from "../../components/Camera";
import { useFocusEffect } from "expo-router";
import { cameraService } from "../../service/camera-service";
import { ImageType } from "../../types/ImageType";
import Loading from "../../components/Loading";
import ImageList from "../../components/ImageList";

const CameraPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [openCamera, setOpenCamera] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const token = await asyncStorageService.getData();
    const camImages = await cameraService.getAllImages(token!);

    setUserToken(token!);
    if (camImages.length > 0) {
      setImages(camImages);
    }
  };
  const unlockCamera = async () => {
    setOpenCamera(true);
  };
  const lockCamera = async () => {
    setOpenCamera(false);
    await getImages();
  };
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getImages();
      setTimeout(() => setLoading(false), 1000);

      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <Loading visible={loading} />
      <View>
        {openCamera ? (
          <Camera
            userToken={userToken}
            closeCamera={lockCamera}
            setLoading={setLoading}
          />
        ) : images.length === 0 ? (
          <View style={styles.imagesContainer}>
            <View style={styles.emptyImages}>
              <Text style={[styles.message]}>Galeria vacía</Text>
              <TouchableOpacity
                style={[styles.touchable]}
                onPress={unlockCamera}
              >
                <Text style={[styles.touchableText]}>Tomar foto</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <ImageList list={images} />
            <TouchableOpacity style={[styles.touchable]} onPress={unlockCamera}>
              <Text style={[styles.touchableText]}>Tomar foto</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
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
  message: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 50,
  },
  imagesContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  emptyImages: {
    marginVertical: "auto",
    width: "100%",
    alignItems: "center",
  },
  touchable: {
    marginHorizontal: "auto",
    marginTop: 25,
    marginBottom: "auto",
    borderRadius: 10,
    borderWidth: 1,
    width: "50%",
    backgroundColor: LIGHTTHEME.amarillo,
  },
  touchableText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});
