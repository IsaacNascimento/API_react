import React from 'react';
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

import { Avatar } from 'react-native-elements';

export default function Item(props) {
  return (
    <View style={styles.item}>
        <Image 
         style={{
           paddingLeft: 8,
           width: 95,
           height: 90,
         }}
         source={require('../assets/img_login.jpg')} 
         />
        <Text style={{paddingLeft: 8}}>{props.item.nome}</Text>
        <Text style={{paddingLeft: 8}}>{props.item.fone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
  },
});
