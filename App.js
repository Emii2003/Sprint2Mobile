import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home';
import Cadastro from './screens/Cadastro'

const Stack = createStackNavigator();

function MyStack() {
  return (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#272727',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <Stack.Screen name="Home" component= {Home} />
    <Stack.Screen name="Cadastro" component= {Cadastro} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
