import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContext } from '../context/UserContext';

import LoginScreen from '../screens/LoginScreen';
import RegistrarScreen from '../screens/RegistrarScreen';
import HomeScreen from '../screens/HomeScreen';
import InicioScreen from '../screens/InicioScreen'

import ContatosScreen from '../screens/ContatosScreen'

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <Stack.Screen 
         name="Home"
         component={HomeScreen}
         options={{headerStyle: { backgroundColor: 'red' }, 
         headerTitleStyle: { fontWeight: 'bold', fontsize: 16, color: 'black' }
          }}/>
        
      ) : (
        <>
          <Stack.Screen
            name="Inicio" 
            component={InicioScreen}
            options={{headerStyle: { backgroundColor: 'red' }, 
            headerTitleStyle: { fontWeight: 'bold', fontsize: 16, color: 'black' }
          }}/>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerStyle: { backgroundColor: 'red' }, 
            headerTitleStyle: { fontWeight: 'bold', fontsize: 16, color: 'black' }
          }}/>
          <Stack.Screen
            name="Registrar"
            component={RegistrarScreen}
            options={{headerStyle: {backgroundColor: 'red' }, 
            headerTitleStyle: {fontWeight: 'bold', fontsize: 16, color: 'black' }
          }}/>
         <Stack.Screen
            name="Contatos"
            component={ContatosScreen}
            options={{headerStyle: {backgroundColor: 'red' }, 
            headerTitleStyle: {fontWeight: 'bold', fontsize: 16, color: 'black' }
          }}/>

        </>
      )}
    </Stack.Navigator>
  );
}
