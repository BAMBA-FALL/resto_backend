// Navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/navigation/AppNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default Navigator;
