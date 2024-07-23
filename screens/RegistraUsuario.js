import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email,
                name,
            });
            Alert.alert('Sucesso', 'Usuário criado com sucesso!');
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
                    Já tem uma conta? Entre aqui
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

export default RegistraUsuario;
