import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';

export default function RecuperarSenha({ navigation }) {
  const caminho = () =>{
    navigation.navigate("Home")
  }
    return (
        <View style={styles.container}>

         <View style={styles.contentMain}>
                <Title name="Recupere a senha"/>
                <Input  
                  placeholder="Senha antiga"
                />
                <Input  
                    placeholder="Nova senha"
                />
                <ButtonDark name="Recuperar" caminho={caminho}/>
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
 
});