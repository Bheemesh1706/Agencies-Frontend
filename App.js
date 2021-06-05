import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Components/StyleComponent'
import Register from './Components/RegisterComponent'
import Login from './Components/LoginComponent'

export default function App() {

  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
  
}


