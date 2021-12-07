import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  useColorScheme,
} from 'react-native';
import firebase from 'firebase';
export default function DetalhesScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const { id } = route.params; 
  const apagar = () => {
    const docref = firebase
      .firestore()
      .collection('Contatos')
      .doc(id);
    docref.delete( );
    navigation.navigate('Contatos');
  };

  const salvar = () => {
    const docref = firebase
      .firestore()
      .collection('Contatos')
      .doc(id);
    docref.set({
      nome: nome,
      email: email,
    });
    navigation.navigate('Contatos');
  };

  useEffect(async() => {
    const docref = firebase
      .firestore()
      .collection('Contatos')
      .doc(id);
    const doc = await docref.get();
    const {nome, email} = doc.data();
    setNome(nome);
    setEmail(email);
  }, [id]);
 
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
        <Button title="Apagar" color="red" onPress={apagar} />
      </View>
      <View>
        <Button title="Salvar" color="red" onPress={salvar} />
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