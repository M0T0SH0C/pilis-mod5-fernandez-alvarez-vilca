import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/images/home.jpg')}>
        <Text style={styles.title}>
          Explora y disfruta los mejores eventos 
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}
