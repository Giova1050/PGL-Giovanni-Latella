import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LIGHTTHEME } from '../../styles/colors'
import asyncStorageService from '../../service/async-storage';
import { router } from 'expo-router';

const logout = () => {

    const handleLogout = async () => {
        try {
          await asyncStorageService.removeData("token");
          router.navigate("/user-management/login-page");
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LIGHTTHEME.azulclaro,
        paddingHorizontal: 50,
      },
      button: {
        width: "100%",
        height: 50,
        backgroundColor: LIGHTTHEME.amarillo,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      },
      buttonText: {
        color: "black",
        fontSize: 18,
      },
})