import React from 'react';
import { FlatList, StyleSheet, View, Text, Avatar } from 'react-native';
import { Header, Icon } from 'react-native-elements';

import Item from '../components/Item';

export default function ContatosScreen({ navigation }) {
  const dados = [
    { id: '1', nome: 'Lucas lima D.', tefone: '61-92170632' },
    { id: '2', nome: 'Juninho Borges ', tefone: '61-92170632' },
    { id: '3', nome: 'Jean Vieira B.', tefone: '61-92170632' },
    { id: '4', nome: 'Silva Vieira C.', tefone: '61-92170632' },
    { id: '5', nome: 'Lucas Vieira S.', tefone: '61-92170632' },
    { id: '6', nome: 'Lucas Mota Silva.', tefone: '61-92170632' },
    { id: '7', nome: 'Gustavo Pereira', tefone: '61-92170632' },
    { id: '8', nome: 'Pontes da Silva', tefone: '61-92170632' },
    { id: '9', nome: 'Guilherme Lima', tefone: '61-92170632' },
    { id: '10', nome: 'Marcos Lima ', tefone: '61-92170632' },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.lista}>
        <FlatList
          data={dados}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  lista: {
    flex: 8,
  },
});
