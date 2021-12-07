import React, { useState, useContext } from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { UserContext } from '../context/UserContext';

import firebase from 'firebase';

export default function RegistrarScreen({ navigation, logado }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressionaRegistrar = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setUsuario({ logado: true, nome: nome });
        return userCredential.user.updateProfile({ displayName: nome });
      })
      .catch((error) => alert(error.message));
  };

  const entreNaSuaConta = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.conteudo}>
      <View style={{ justifyContent: 'center', backgroundColor: 'gainsboro' }}>
        <Text style={styles.paragraph}>Cadastro</Text>
      </View>
      <View style={{ backgroundColor: 'gainsboro' }}>
        <View style={styles.meio}>
          <Text style={styles.paragra}>Nome</Text>
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
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
          {errors?.nome && (
            <Text style={{ color: 'red' }}>{errors?.nome?.message}</Text>
          )}
          <Text style={styles.paragra}>E-mail</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: { value: true, message: 'Email obrigatório' },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.campo}
                autoCapitalize={false}
                keyboardType="email-address"
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
          {errors?.email && (
            <Text style={{ color: 'red' }}>{errors?.email?.message}</Text>
          )}
          <Text style={styles.paragra}>Senha</Text>
          <Controller
            control={control}
            name="senha"
            rules={{
              required: { value: true, message: 'Senha obrigatória' },
              minLength: { value: 6, message: 'Senha menor que 6 caracteres' },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.campo}
                autoCapitalize={false}
                secureTextEntry={true}
                value={value}
                onChangeText={(text) => onChange(text)}
              />
            )}
          />
          {errors?.senha && (
            <Text style={{ color: 'red' }}>{errors?.senha?.message}</Text>
          )}
        </View>
        <View style={styles.botao}>
          <Button
            title="Cadastrar"
            color="red"
            onPress={handleSubmit(pressionaRegistrar)}
          />
        </View>
        
      </View>
      <View>
        <View style={styles.cadestre}>
          <Text style={{ color: 'red' }} onPress={entreNaSuaConta}>
            Entre na sua conta!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 3,
    justifyContent: 'center',
    padding: 4,
    paddingLeft: 20,
    paddingEnd: 20,
    marginTop: 80,
  },
  campo: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'silver',
  },
  botao: {
    marginBottom: 16,
    paddingLeft: 45,
    paddingEnd: 45,
    padding: 20,
    paddingBottom: 2,
    paddingTop: 8
  },
  paragraph: {
    marginBottom: 0,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'red',
    textAlign: 'center',
    height: 50,
    paddingVertical: 5,
  },
  paragra: {
    marginTop: 3,
    marginBottom: 8,
    padding: 4,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  meio: {
    paddingLeft: 20,
    paddingEnd: 20,
  },
  cadestre: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 36,
    marginBottom: 8,
    margin: 13,
  },
});
