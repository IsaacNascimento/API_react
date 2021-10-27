import React, { useState } from 'react';
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

import { FAB, Icon } from 'react-native-elements';

import Item from '../components/Item'

export default function HomeScreen({navigation}) {
  const dados = [
    { id: '1', titulo: ''    , descricao: '' },
    { id: '2', titulo: ''    , descricao: '' },
    { id: '3', titulo: ''    , descricao: '' },
    { id: '4', titulo: ''    , descricao: '' },
    { id: '5', titulo: ''    , descricao: '' },
  ];

  const pressionaFAB = () => {
    navigation.navigate("Contatos");
  };

  return (
    <View style={{ flex: 1 }}>
     <View style={styles.container}>
       <View style={{ alignItems: 'center' }}>
        </View>
     </View>
     
     <FlatList data={dados} 
              renderItem={Item}
              keyExtractor={(item) => item.id}
    /> 

    <FAB
        placement="right"
        color="red"
        icon={<Icon name="add" color="white"/>}
        onPress={pressionaFAB}
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    padding: 8,
  },
});