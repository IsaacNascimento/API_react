import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserProvider } from './context/UserContext';
import MainNavigator from './routes/MainNavigator';

import SplashScreen from './screens/SplanScreen';

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
        {exibeSplash ? <SplashScreen /> : <MainNavigator /> }    
      </NavigationContainer>
    </UserProvider>
    
  );
}
