import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import RegistraUsuario from './screens/RegistraUsuario';
import RecuperarSenha from './screens/RecuperarSenha';
import Teste from './screens/Teste'; 
import 'react-native-gesture-handler';
import { LogBox } from 'react-native'; // Importar LogBox para versões mais recentes

// Desativa todos os warnings
LogBox.ignoreAllLogs(); // Ignora todos os logs
const Stack = createStackNavigator();
import './Firebase'; // Importação do arquivo de configuração do Firebase

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegistraUsuario" component={RegistraUsuario} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="Teste" component={Teste} /> 
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
