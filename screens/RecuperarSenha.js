import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../Firebase'; // Importação do Firebase

import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';

const RecuperarSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const auth = getAuth(app);

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Sucesso', 'E-mail de redefinição de senha enviado!');
            navigation.navigate('Login'); // Redireciona para a tela de login
        } catch (error) {
            console.error('Erro ao redefinir senha:', error.message);
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentMain}>
                <Title name="Recuperar Senha"/>
                <Input
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <ButtonDark name="Enviar e-mail de redefinição" onPress={handlePasswordReset} />
                <Text style={styles.textsecondary} onPress={() => navigation.navigate('Login')}>
                    Lembrou a senha? <Text style={styles.innerText}>Entre aqui</Text>
                </Text>
            </View>       
        </View>
    );
};

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
        color: '#fff'
    },
    innerText: {
        color: '#A03651'
    }
});

export default RecuperarSenha;
