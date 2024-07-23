import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase'; // Importação do Firebase

import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigation.replace('Home', { user });
            Alert.alert('Sucesso', 'Usuário logado com sucesso!');
        } catch (error) {
            console.error('Erro de autenticação:', error.message);
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentMain}>
                <View>
                    <Title name="Digite seu E-mail"/>
                    <Input placeholder="example@gmail.com" value={email} onChangeText={setEmail} />
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
                <ButtonDark name="Entrar" onPress={handleLogin} />
                <Text style={styles.textsecondary} onPress={() => navigation.navigate('RegistraUsuario')}>
                    Ainda não tem uma conta? Registre-se aqui
                </Text>
                <Text style={styles.textsecondary} onPress={() => navigation.navigate('RecuperarSenha')}>
                    Esqueceu sua senha? Recupere aqui
                </Text>
            </View>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
    },
    contentMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15vh',
    },
    textsecondary: {
        marginTop: 20,
        color: '#A03651'
    }
});
