import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Auth/Login';
import HomeScreen from './components/screens/HomeScreen'; // Importez votre écran HomeScreen

const Stack = createStackNavigator();

const App = () => {
  // Cette condition vérifie si l'utilisateur est déjà connecté ou non
  const userIsLoggedIn = false; // Mettez la logique appropriée ici

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userIsLoggedIn ? 'HomeScreen' : 'Login'}>
        {/* Si l'utilisateur est connecté, naviguer vers la page Home, sinon, afficher la page de connexion */}
        {userIsLoggedIn ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
