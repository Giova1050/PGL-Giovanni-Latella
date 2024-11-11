import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type WelcomeProps = {
    info: string;
    img: ImageSourcePropType;
}


const _layout = () => {
  return (
    <View style={styles.container}>
        
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})