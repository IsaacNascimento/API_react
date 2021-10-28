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

export default function HomeScreen({ navigation }) {
  const pressionaDetalhes = () => {
    navigation.navigate('Detalhes');
  };


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'end' }}>
        <Text style={{ paddingEnd: 12 }}>titulo principal da noticia</Text>
      </View>
      <View style={{}} onPress={pressionaDetalhes}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_login.jpg')}
        />
      </View>
            <View style={{ alignItems: 'end' }}>
        <Text style={{ paddingEnd: 12 }}>titulo principal da noticia</Text>
      </View>
      <View style={{}}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_login.jpg')}
        />
      </View>
            <View style={{ alignItems: 'end' }}>
        <Text style={{ paddingEnd: 12 }}>titulo principal da noticia</Text>
      </View>
      <View style={{}}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignItems: 'start',
            marginBottom: 18,
          }}
          source={require('../assets/img_login.jpg')}
        />
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
