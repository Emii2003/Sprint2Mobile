import { StyleSheet, View, Alert } from 'react-native';
import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';
import React, { useState } from 'react';
import axios from 'axios'; 

export default function RecuperarSenha({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRecuperarSenha = () => {
    if (newPassword === '' || confirmPassword === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
    } else {
      // Fazer a requisição à API para recuperar a senha
      axios.post('http://localhost:8000/usuario', {
        newPassword: newPassword,
        confirmPassword: confirmPassword
      })
      .then(response => {
        Alert.alert('Sucesso', `Senha recuperada com sucesso: ${newPassword}`);
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert('Erro', 'Erro ao recuperar senha. Por favor, tente novamente.');
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentMain}>
        <Title name="Recuperar senha"/>
        <Input  
          placeholder="Crie uma nova senha"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword} 
        />
        <Input  
          placeholder="Confirmar nova senha"
          secureTextEntry={true} 
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <ButtonDark name="Recuperar" onPress={handleRecuperarSenha}/>
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
