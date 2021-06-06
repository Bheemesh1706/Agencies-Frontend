import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Components/StyleComponent'
import Register from './Components/RegisterComponent'
import Login from './Components/LoginComponent'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    
          <NavigationContainer>
                <Stack.Navigator initialRouteName = "Register">
                    <Stack.Screen name="Register" component= {Register}/>
                    <Stack.Screen name = "Login" component = {Login}/>
                </Stack.Navigator>
          </NavigationContainer>
    
  );
  
}


