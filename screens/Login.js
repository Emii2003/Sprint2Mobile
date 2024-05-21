import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const caminho = () =>{
    axios.get('http://localhost:8000/usuario', {
      email_Usuario: email,
      senha_Usuario: password
    })
    .then(response => {
      if (response.status === 200) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Credenciais inválidas!");
      }
    })
    .catch(error => {
      Alert.alert("Erro", error.message);
    });
  };

    return (
        <View style={styles.container}>

         <View style={styles.contentMain}>
              <View>
                <Title name="Digite seu E-mail"/>
                <Input placeholder="E-mail corporativo" value={email} onChangeText={setEmail} />
              </View>
              <View>
                <Title name="Digite sua senha"/>
                <Input  
                    placeholder="*************"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
              </View>
                <ButtonDark name="Entrar" caminho={caminho}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15vh',
  },
  textsecondary:{
    color: '#A03651'
  },
 
});