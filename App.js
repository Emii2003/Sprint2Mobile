import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import RecuperarSenha from './screens/RecuperarSenha'
import Home from './screens/Home';
import Login from './screens/Login'

const Stack = createStackNavigator();

function MyStack() {
  return (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component = {Home}/>
    <Stack.Screen name="OnboardingScreen" component = {OnboardingScreen}/>
    <Stack.Screen name="Login" component = {Login}/>
    <Stack.Screen name="RecuperarSenha" component = {RecuperarSenha}/>
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
