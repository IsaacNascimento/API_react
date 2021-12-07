import React, { useContext, useState, useEffect } from 'react';
import {
  Pressable,
  FlatList,
  StyleSheet,
  View,
  Text,
  Avatar,
  Image,
} from 'react-native';
import { Header, Icon, FAB } from 'react-native-elements';

// import Item from '../components/Item';

import firebase from 'firebase';

export default function ContatosScreen({ navigation }) {
  const [dados, setDados] = useState([]);

  const pressionaNovo = () => {
    navigation.navigate('Novo');
  };

  const pressionarItem = (id) => {
    navigation.navigate('Detalhes', { id: id });
  };

  useEffect(() => {
    const contatos = [];
    firebase
      .firestore()
      .collection('Contatos')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const { nome, email } = doc.data();
          contatos.push({
            id: doc.id,
            nome: nome,
            email: email,
          });
        });
        console.log(contatos);
        setDados([...contatos]);
      });
  }, [setDados]);

  const Item = ({ item }) => {
    return (
      <Pressable onPress={() => {pressionarItem(item.id)}}>
        <View style={styles.item}>
          <Image
            style={{
              paddingLeft: 8,
              width: 25,
              height: 25,
            }}
            source={require('../assets/user.png')}
          />
          <Text style={{ paddingLeft: 0 }}>{item.nome}</Text>
          <Text style={{ paddingLeft: 8 }}>{item.email}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.lista}>
        <FlatList
          data={dados}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FAB
        placement="right"
        color="red"
        icon={<Icon name="add" color="white" />}
        onPress={pressionaNovo}
        style={styles.btn}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  lista: {
    flex: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
  },
});
