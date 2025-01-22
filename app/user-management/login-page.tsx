import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginPage = () => {
  return (
    <View>
      <Text>LoginPage</Text>
      <Link href="./register-page">¡Quiero registrarme!</Link>
    </View>
  )
}

export default LoginPage
const styles = StyleSheet.create({})