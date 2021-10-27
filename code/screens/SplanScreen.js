import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.conteudo}>
      <Text style={styles.titulo}>Bem Vindo!!!</Text>
      <Image style={styles.logo} source={require('../assets/CoolClips_vc011882.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignItems: 'center',
    width: 249,
    height: 230
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 12
  },
});
