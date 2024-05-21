import { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonDark from '../components/ButtonDark';
import Input from '../components/Input';
import axios from 'axios';

export default function OnboardingScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const caminho = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "Erro, as senhas não coincidem!");
      return;
    }
    axios.post('http://localhost:8000/usuario', { 
      email_Usuario: email,
      senha_Usuario: password
    })
    console.log("Dados enviados:", { email_Usuario: email, senha_Usuario: password });
      axios.post('http://localhost:8000/usuario', {
      email_Usuario: email,
      senha_Usuario: password
      })
    .then(response => {
      // Verifique a resposta da API e navegue para a tela de login se bem-sucedido
      if (response.status === 200) {
        navigation.navigate("Login");
      } else {
        Alert.alert("Erro", "Houve um problema com o cadastro!");
      }
    })
    .catch(error => {
      // Trate os erros da API
      if (error.response) {
        // Erros que possuem resposta do servidor
        console.log("Erro na requisição:", error);
      } else if (error.request) {
        // Erros que ocorreram ao fazer a requisição
        Alert.alert("Erro", "Não foi possível conectar ao servidor!");
      } else {
        // Outros tipos de erros
        Alert.alert("Erro", error.message);
      }
    });
  }

  return (
    <Onboarding
      style={styles.container}
      pages={[
        {
          backgroundColor: '#272727',
          title: 'Bem vindo ao InsightIA',
          subtitle: "Melhore sua análise de mercado e conquiste inteligência competitiva.",
        },
        {
          backgroundColor: '#272727',
          title: 'Insira o E-mail corporativo',
          subtitle: <Input placeholder="E-mail corporativo" value={email} onChangeText={setEmail} />,
        },
        {
          backgroundColor: '#272727',
          title: 'Agora crie uma senha',
          subtitle: <Input 
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} />,
        },
        {
          backgroundColor: '#272727',
          title: 'Confirme a senha',
          subtitle: <Input placeholder="Confirmar"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true} />,
        },
        {
          backgroundColor: '#272727',
          title: 'Clique em finalizar para confirmar seus dados',
          subtitle: <ButtonDark name="Finalizar" caminho={caminho} />,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});