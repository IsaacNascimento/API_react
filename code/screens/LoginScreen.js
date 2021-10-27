import React, { useState, useContext } from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { UserContext } from '../context/UserContext';

export default function LoginScreen({ navigation, logado }) {
  const [usuario, setUsuario] = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pressionaEntrar = (values) => {
    console.log(values); // chama login
    setUsuario({ logado: true, nome: 'Maycon' });
  };

  const pressionaRegistrar = () => {
    navigation.navigate('Registrar');
  };

  return (
    <View style={styles.conteudo}>
      <View style={styles.entrar}>
        <Text style={styles.paragraph}>Entrar</Text>
      </View>
      <View style={{ backgroundColor: 'gainsboro' }}>
        <View style={styles.meio}>
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
                placeholder="senha"
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
            title="Entrar"
            color="red"
            onPress={handleSubmit(pressionaEntrar)}
          />
        </View>
      </View>
      <View>
        <View style={styles.cadestre}>
          <Text style={{ color: 'red' }} onPress={pressionaRegistrar}>
            Cadastre-se aqui!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingLeft: 20,
    paddingEnd: 20,
    marginTop: 60,
  },
  entrar: {
     backgroundColor: 'gainsboro',
     height: 50
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
  },
  paragraph: {
    marginBottom: 20,
    fontSize: 21,
    fontWeight: 'bold',
    backgroundColor: 'red',
    textAlign: 'center',
    height: 120,
    paddingVertical: 5
  },
  paragra: {
    marginTop: 3,
    marginBottom: 8,
    padding: 4,
    margin: 3,
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
    margin: 13,
    fontSize: 36,
    marginBottom: 8,
  },
});