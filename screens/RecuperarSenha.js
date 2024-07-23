import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../Firebase'; // Importação do Firebase

import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';

export default function RecuperarSenha() {
    const [email, setEmail] = useState('');

    const auth = getAuth(app);

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Sucesso', 'E-mail de recuperação enviado!');
        } catch (error) {
            console.error('Erro ao enviar e-mail de recuperação:', error.message);
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentMain}>
                <Title name="Digite seu E-mail"/>
                <Input placeholder="example@gmail.com" value={email} onChangeText={setEmail} />
                <ButtonDark name="Enviar e-mail de recuperação" onPress={handlePasswordReset} />
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
});
