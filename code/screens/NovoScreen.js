import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import firebase from 'firebase';

export default function NovoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const pressionaSalvar = () => {
    firebase.firestore().collection('Contatos').add({
      nome: nome,
      email: email,
    });
    navigation.navigate('Contatos');
  };

  return (
    <View style={styles.conteudo}>
      <TextInput
        style={styles.campo}
        autoCapitalize={true}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.campo}
        autoCapitalize={false}
        keyboardType="email-address"
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.botao}>
        <Button
            title="Entrar"
            color="red"
            onPress={pressionaSalvar}
          />
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
  campo: {
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  botao: {
    marginBottom: 16,
  },
});