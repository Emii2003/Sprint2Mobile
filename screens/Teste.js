import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Teste = ({ route }) => {
    const { user } = route.params; // Recebe os dados do usuário da navegação

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Olá, <Text>{user.name}</Text></Text>
        </View>
       
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Thinking Five Teste</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
    },
    header: {
        backgroundColor: '#A03651',
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 1, 
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        backgroundColor: '#333',
        paddingVertical: 10,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Teste;
