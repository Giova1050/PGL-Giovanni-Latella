import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import Entypo from "@expo/vector-icons/Entypo";

import { cameraService } from "../service/camera-service";
import { LIGHTTHEME } from "../styles/colors";


export type CameraProps = {
  closeCamera: () => void;
  userToken: string;
  setLoading: (loading: boolean) => void;
};

const Camera = ({ userToken, closeCamera, setLoading }: CameraProps) => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestCameraPermission] = useCameraPermissions();

  const takePicture = async () => {
    try {
      const picture = await cameraRef.current?.takePictureAsync({
        base64: true,
      });
      if (picture != null && picture.base64 != null) {
        await cameraService.saveImage(userToken, picture);
        setLoading(true);
        closeCamera();
        setTimeout(() => setLoading(false), 2000);
      } else {
        alert("Error al tomar la foto.");
      }
    } catch (error) {
      console.log("Error al tomar la foto:", error);
    }
  };
  if (!permission?.granted) {
    return (
      <Pressable
        style={[styles.PermissionButton]}
        onPress={requestCameraPermission}
      >
        <Text style={[styles.touchableText]}>Permitir cámara</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        mode="picture"
        ref={cameraRef}
        onCameraReady={() => {
          console.log("Camera is ready!");
        }}
      ></CameraView>
      <View style={[styles.borderButtons]}>
        <Pressable
          onPress={() => {
            takePicture();
          }}
        >
          <Entypo style={[styles.takePictureButton]} name="camera" size={50} />
        </Pressable>
        <Pressable onPress={() => closeCamera()}>
          <Entypo
            style={[styles.iconButton]}
            name="circle-with-cross"
            size={30}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: 395,
  },
  PermissionButton: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 50,
    zIndex: 1,
  },
  touchableText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  iconButton: {
    padding: 10,
    marginBottom: 10,
  },
  borderButtons: {
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  takePictureButton: {
    marginBottom: 15,
    marginLeft: 130,
    color: LIGHTTHEME.verde,
  },
});
