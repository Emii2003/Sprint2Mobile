import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';

export default function Login({ navigation }) {
  const caminho = () =>{
    navigation.navigate("Home")
  }
    return (
        <View style={styles.container}>

         <View style={styles.contentMain}>

                <Text style = {styles.titleForm}>Bem vindo!!</Text>
                <Text style = {styles.subtitleForm}>Não tem uma conta? Cadstre-se</Text>

                <Input  
                  placeholder="E-mail corporativo"
                />
                <Input  
                    placeholder="Senha"
                />
                <ButtonDark name="Entrar" caminho={caminho}/>
         </View>

                
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727',
  },
  contentMain: {
    display: 'flex',
    marginTop: '15vh',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  titleForm:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20
  },
  subtitleForm:{
    color: '#fff',
    marginBottom: 30
  },
 
});