import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

import Botao from '../components/Botao';
import Titulo from '../components/Titulo';
import Rodape from '../components/Rodape';

const Teste = ({ route }) => {
    const { user } = route.params; // Recebe os dados do usuário da navegação
    const navigation = useNavigation(); // Obtém o objeto de navegação

    // Função para fazer logout
    const handleLogout = async () => {
        try {
            await getAuth().signOut();
            Alert.alert("Logout", "Você saiu da conta com sucesso.", [{ text: "OK", onPress: () => navigation.navigate("Login") }]);
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao sair da conta. Tente novamente.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Titulo style={styles.headerText}>Olá, </Titulo> */}
                <Titulo style={styles.headerNameUser}>{user.name}</Titulo>
                <Titulo style={styles.headerText}>ID: 230 000 000 000</Titulo>

            </View>

            <View style={styles.buttonContainer}>
                <Botao
                    name="Sair da Conta"
                    onPress={handleLogout}
                    borderColor="#DC8AA8"
                    textColor="#DC8AA8"
                    style={styles.logoutButton}
                />
            </View>

            <View style={styles.footer}>
                <Rodape
                    onHomePress={() => navigation.navigate('Home')}
                    onSearchPress={() => navigation.navigate('Search')}
                    onProfilePress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
        justifyContent: 'center', // Centraliza o conteúdo principal
    },
    header: {
        alignItems: 'flex-start', // Alinha o conteúdo do cabeçalho à esquerda
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#A03651',
        width: '100%',
        height: '20%',
        padding: 30,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        borderBottomLeftRadius: 10, // Arredonda o canto inferior esquerdo
        borderBottomRightRadius: 10, // Arredonda o canto inferior direito
    },
    headerText: {
        fontSize: 20,
        fontWeight: '100'
    },
    headerNameUser:{
        fontSize: 30,
        fontWeight: 900,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '15%',
        right: 20,
        alignItems: 'flex-end',
    },
    logoutButton: {
        width: 150, // Garante que o botão ocupe toda a largura disponível do container
    },
    footer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#333',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 0,
    }
});

export default Teste;