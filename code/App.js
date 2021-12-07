import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserProvider } from './context/UserContext';
import MainNavigator from './routes/MainNavigator';
import SplashScreen from './screens/SplanScreen';

import firebase from 'firebase';
import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3dseCGBoG3rIiQ0Q4MDj8PxP9gLd_0m8",
  authDomain: "apireact-bec0c.firebaseapp.com",
  projectId: "apireact-bec0c",
  storageBucket: "apireact-bec0c.appspot.com",
  messagingSenderId: "984827817454",
  appId: "1:984827817454:web:7937ca87980202eacfb2ff",
  measurementId: "G-N056B3RCK0"
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 3000);
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
