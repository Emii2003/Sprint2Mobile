import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

export default function Login({ navigation }) {
  const caminho = () =>{
    navigation.navigate("Home")
  }
    return (
        <View style={styles.container}>

         <View style={styles.contentMain}>
                <Title name="Digite seu E-mail"/>
                <Input  
                  placeholder="nome@example.com"
                />
                <Title name="Digite sua senha"/>
                <Input  
                    placeholder="*************"
                />
                <ButtonDark name="Entrar" caminho={caminho}/>
                <br></br>
                <Subtitle name = "Esqueceu sua senha?" />
                <Text style={styles.textsecondary} onPress={() =>
                    navigation.navigate({name:'RecuperarSenha'})}>Recuperar Senha</Text>
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
  subtitleForm:{
    color: '#fff',
    marginBottom: 30
  },
  textsecondary:{
    color: '#A03651'
  },
 
});