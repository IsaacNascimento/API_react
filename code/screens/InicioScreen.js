import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Image } from 'react-native';

export default function InicioScreen({ navigation, logado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const pressionaEntrar = () => {
    navigation.navigate('Login');
  };

  const pressionaRegistrar = () => {
    navigation.navigate('Registrar');
  };

  return (
    <View style={styles.conteudo}>
       <View style={{ alignItems: 'center' }}>
         <Image style={{ height: 150, width: 150, alignItems: 'center', marginBottom: 18}} source={require('../assets/img_login.jpg')}/>
      </View>
      <View style={styles.botao}>
        <Button title="Entrar" color="black" onPress={pressionaEntrar} />
      </View>
      <View style={styles.botao}>
        <Button title="Cadastra-se" color="red" onPress={pressionaRegistrar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  botao: {
    marginBottom: 16,
  },
});

