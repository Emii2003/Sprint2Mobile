import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Picker } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../Firebase'; // Importação do Firebase

import Input from '../components/Input';
import ButtonDark from '../components/ButtonDark';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle'

const RegistraUsuario = ({ navigation }) => {
    const [step, setStep] = useState(1);

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [categoriaEmpresa, setCategoriaEmpresa] = useState('');

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleNextStep = (currentStep) => {
        if (currentStep === 1) {
            if (!nomeEmpresa || !categoriaEmpresa) {
                Alert.alert('Erro', 'Por favor, preencha todos os campos da empresa.');
                return;
            }
            setStep(2);
        } else if (currentStep === 2) {
            if (!email || !name) {
                Alert.alert('Erro', 'Por favor, preencha todos os campos pessoais.');
                return;
            }
            setStep(3);
        }
    };

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'dadosUsuarios', user.uid), {
                email,
                name,
                nomeEmpresa,
                categoriaEmpresa,
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
                {step === 1 ? (
                    <>
                        <Title name="Dados da Empresa"/>
                        <View style={styles.campoCadastro}>
                            <Subtitle name="Nome da Empresa"></Subtitle>
                            <Input
                                placeholder="Nome da Empresa"
                                value={nomeEmpresa}
                                onChangeText={setNomeEmpresa}
                            />
                        </View>

                        <View style={styles.campoCadastro}>
                            <Subtitle name="Categoria Empresa"></Subtitle>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={categoriaEmpresa}
                                    style={styles.picker}
                                    onValueChange={(itemValue) => setCategoriaEmpresa(itemValue)}
                                >
                                    <Picker.Item label="Selecione o Ramo" value="" />
                                    <Picker.Item label="Tecnologia" value="Tecnologia" />
                                    <Picker.Item label="Saúde" value="Saúde" />
                                    <Picker.Item label="Educação" value="Educação" />
                                    <Picker.Item label="Comércio" value="Comércio" />
                                    <Picker.Item label="Outro" value="Outro" />
                                </Picker>
                            </View>
                        </View>
                        <ButtonDark name="Próximo" onPress={() => handleNextStep(1)} />
                    </>
                ) : step === 2 ? (
                    <>
                        <Title name="Seus Dados"/>
                        <View style={styles.campoCadastro}>
                            <Subtitle name="Seu nome"></Subtitle>
                            <Input
                                placeholder="Nome"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.campoCadastro}>
                            <Subtitle name="Seu email?"></Subtitle>
                            <Input
                                placeholder="example@gmail.com"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <ButtonDark name="Próximo" onPress={() => handleNextStep(2)} />
                        <Text style={styles.textsecondary} onPress={() => setStep(1)}>
                            Voltar
                        </Text>
                    </>
                ) : (
                    <>
                        <Title name="Defina sua Senha"/>
                        <View style={styles.campoCadastro}>
                            <Subtitle name="Senha"></Subtitle>
                            <Input
                                placeholder="Senha"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={styles.campoCadastro}>
                            <Subtitle name="Confirmar senha"></Subtitle>
                            <Input
                                placeholder="Confirme a Senha"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                        <ButtonDark name="Registrar" onPress={handleRegister} />
                        <Text style={styles.textsecondary} onPress={() => setStep(2)}>
                            Voltar
                        </Text>
                    </>
                )}
                {step === 3 && (
                    <>
                        <Text style={styles.textsecondary} onPress={() => navigation.navigate('Login')}>
                            Já tem uma conta? 
                            <Text style={styles.innerText}> Entre aqui </Text>
                        </Text>
                        <Text style={styles.textsecondary} onPress={() => navigation.navigate('RecuperarSenha')}>
                            Esqueceu sua senha?
                            <Text style={styles.innerText}> Recupere aqui </Text>
                        </Text>
                    </>
                )}
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
    campoCadastro: {
        marginBottom: 15
    },
    textsecondary: {
        marginTop: 20,
        color: '#fff'
    },
    innerText: {
        color: '#A03651'
    },
    pickerContainer: {
        backgroundColor: '#232222',
            width: '80vw',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 10,
    },
    picker: {
        color: '#DC8AA8',
    },
});

export default RegistraUsuario;
