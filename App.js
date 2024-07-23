import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Login from './screens/Login'
import RegistraUsuario from './screens/RegistraUsuario'
import RecuperarSenha from './screens/RecuperarSenha'

const Stack = createStackNavigator();
import './Firebase'; // Importação do arquivo de configuração do Firebase

function MyStack() {
  return (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component = {Home}/>
    <Stack.Screen name="RegistraUsuario" component = {RegistraUsuario}/>
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
