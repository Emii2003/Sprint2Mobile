import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Teste = ({ route }) => {
    const { user } = route.params; // Recebe os dados do usuário da navegação

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Olá, {user.name}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272727',
    },
    greeting: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Teste;
