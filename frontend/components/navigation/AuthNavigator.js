import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Login" 
      component={Login} 
      options={{
        tabBarLabel: "Connexion",
        tabBarStyle: {backgroundColor: "#E9C46A"},
        tabBarIcon : ({color}) =>(
          <MaterialCommunityIcons name= "login" color={color} size = {26}/>
        )
      }}
      />
      <Tab.Screen
       name="Register"
        component={Register}
        options={{
          tabBarLabel: "Connexion",
          tabBarStyle : {backgroundColor: "#82CEF9"},
          tabBarIcon: ({color}) =>(
            <MaterialCommunityIcons name="account" color={color} size ={26}/>
          )
        }}
        />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
