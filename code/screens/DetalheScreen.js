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

export default function DetalhesScreen({ navigation }) {
  const pressionaFAB = () => {
    navigation.navigate('Contatos');
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 18, }}>
        <Text>titulo principal da noticia</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            height: 100,
            width: 100,
            marginBottom: 18,
          }}
          source={require('../assets/img_login.jpg')}
        />
      </View>
      <View style={{ paddingEnd: 10, paddingLeft: 10, marginBottom: 18, }}>     
        <Text style={{}}>descrição da noticia inteira ou a informação completa afasf fasfasf fasfasf af asf asfasfasfaf afasfafasfa afasfa</Text>
      </View>
    </View>
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
