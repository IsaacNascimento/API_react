import React, { useContext, useState, useEffect } from 'react';
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
  ScrollView,
} from 'react-native';

import { UserContext } from '../context/UserContext';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  const pressionaDetalhes = () => {
    navigation.navigate();
  };

  const [usuario, setUsuario] = useContext(UserContext);

    const pressionaSair = () => {
    setUsuario({ logado: false, nome: '' });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'end' }}>
        <Text
          style={{ paddingEnd: 12, marginTop: 15 }}
          onPress={pressionaDetalhes}>
          Três assasinatos em Corumbá
        </Text>
      </View>
      <View
        style={{ borderBottomWidth: 0, flexDirection: 'row' }}
        onPress={pressionaDetalhes}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_noticia1.jfif')}
        />
        <Text style={{ paddingStart: 10, marginTop: 35 }}>
          Wanderson Mota Protácio, de 21 anos, confessou ter assasinado 3 pessoas no total.
        </Text>
      </View>
      <View style={{ alignItems: 'end' }}>
        <Text
          style={{ paddingEnd: 12, marginTop: 15 }}
          onPress={pressionaDetalhes}>
          Balsas usadas para garimpo ilegal
        </Text>
      </View>
      <View
        style={{ borderBottomWidth: 0, flexDirection: 'row' }}
        onPress={pressionaDetalhes}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_noticia2.jfif')}
        />
        <Text style={{ paddingStart: 10, marginTop: 35 }}>
          Operação da Polícia Federal destruiu 131 embarcações usadas por garimpeiros.
        </Text>
      </View>
      <View style={{ alignItems: 'end' }}>
        <Text
          style={{ paddingEnd: 12, marginTop: 15 }}
          onPress={pressionaDetalhes}>
          Funcionário dos Correios é preso 
        </Text>
      </View>
      <View
        style={{ borderBottomWidth: 0, flexDirection: 'row' }}
        onPress={pressionaDetalhes}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_noticia3.jfif')}
        />
        <Text style={{ paddingStart: 10, marginTop: 35, marginBottom: 10 }}>
            Suspeito de furtar mais de 200 encomendas em Balneário Camboriú.
        </Text>
      </View>
      <View>
        <Button title="Sair" onPress={pressionaSair} />
      </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
});
