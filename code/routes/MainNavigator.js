import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Ionicons,
} from 'react-native';

import { UserContext } from '../context/UserContext';

import LoginScreen from '../screens/LoginScreen';
import RegistrarScreen from '../screens/RegistrarScreen';
import HomeScreen from '../screens/HomeScreen';
import InicioScreen from '../screens/InicioScreen';

import ContatosScreen from '../screens/ContatosScreen';
import DetalhesScreen from '../screens/DetalheScreen';
import NovoScreen from '../screens/NovoScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <NavigationContainer independent={true}>
      {usuario.logado ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Início':
                  iconName = 'home'
                  color='black';
                  break;
                case 'Contatos':
                  iconName = 'phone-call'
                  color='black';
                  break;
                case 'Detalhes':
                  iconName = 'edit';
                  color='black'
                  break;
                case 'Novo Contato':
                  iconName = 'user-plus'
                  color='black';
                  break;
              }
              return <Icon name={iconName} size={size} color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ff4500',
            inactiveTintColor: '#000000',
          }}
          initialRouteName="Login">
          <Tab.Screen
            name="Início"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />
          <Tab.Screen
            name="Contatos"
            component={ContatosScreen}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />

          <Stack.Screen
            name="Detalhes"
            component={DetalhesScreen}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />

          <Stack.Screen
            name="Novo Contato"
            rightComponent={{ icon: 'home', color: '#fff' }}
            component={NovoScreen}      
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />
        </Tab.Navigator>
      ) : (
        <>
          <Stack.Navigator independent={true}>
            <Stack.Screen
              name="Inicio"
              component={InicioScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
            <Stack.Screen
              name="Registrar"
              component={RegistrarScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
