import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../Firebase'; // Importação do Firebase

import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';

const RegistraUsuario = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleRegister = async () => {
        console.log('Handle Register called'); // Verifique se esta linha é exibida no console
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            await setDoc(doc(db, 'dadosUsuarios', user.uid), {
                email,
                name,
            });
            // Envia email de verificação
            await sendEmailVerification(user);

            Alert.alert('Sucesso', 'Usuário criado com sucesso! Verifique seu e-mail para ativar sua conta.');
            navigation.navigate('Login'); // Redireciona para a tela de login
        } catch (error) {
            console.error('Erro de autenticação:', error.message);
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentMain}>
                <Title name="Seus Dados"/>
                <Input
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    placeholder="example@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="*************"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <ButtonDark name="Registrar" onPress={handleRegister} />
                <Text style={styles.textsecondary} onPress={() => navigation.navigate('Login')}>
                    Já tem uma conta? 
                    <Text style={styles.innerText}> Entre aqui </Text>
                </Text>
                <Text style={styles.textsecondary} onPress={() => navigation.navigate('RecuperarSenha')}>
                    Esqueceu sua senha?
                    <Text style={styles.innerText}> Recupere aqui </Text>
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
        color: '#fff'
    },
    innerText: {
        color: '#A03651'
    }
});

export default RegistraUsuario;
