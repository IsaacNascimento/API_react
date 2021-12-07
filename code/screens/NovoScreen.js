import React, { useState, useContext } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import firebase from 'firebase';
import { UserContext } from '../context/UserContext';
import { useForm, Controller } from 'react-hook-form';

export default function NovoScreen({ navigation, logado }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressionaEntrar = (values) => {
    firebase
     .auth()
     .signInWithEmailAndPassword(values.email, values.senha)
     .then(userCredential => {
       setUsuario({ logado: true, nome: userCredential.user.displayName})
     })
     .catch(error => {
       console.log(error.message)
     });
  setUsuario({ logado: true, nome: 'Maycon' });
  navigation.navigate('Home')
  };

  const pressionaSalvar = () => {
    firebase.firestore().collection('Contatos').add({
      nome: nome,
      email: email,
    });
    navigation.navigate('Contatos');
  };

  return (
    <View style={styles.conteudo}>
      <Controller
            control={control}
            name="nome"
            rules={{
              required: { value: true, message: 'O nome é obrigatório' },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.campo}
                autoCapitalize={false}
                placeholder="Nome"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
          {errors?.nome && (
            <Text style={{ color: 'red' }}>{errors?.nome?.message}</Text>
          )}
      <Controller
            control={control}
            name="email"
            rules={{
              required: { value: true, message: 'E-mail obrigatório' },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.campo}
                autoCapitalize={false}
                placeholder="E-mail"
                keyboardType="email-address"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
          {errors?.email && (
            <Text style={{ color: 'red' }}>{errors?.email?.message}</Text>
          )}
      <View style={styles.botao}>
        <Button
            title="Entrar"
            color="red"
            onPress={handleSubmit(pressionaEntrar)}
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