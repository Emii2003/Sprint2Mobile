import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // ou qualquer outra biblioteca de ícones
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const Rodape = ({ onHomePress, onSearchPress, onProfilePress }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={onHomePress}>
                <Ionicons name="analytics" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchPress}>
                <Feather name="search" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onProfilePress}>
                <Ionicons  name="people" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#333',
        position: 'absolute',
        bottom: 25,
    },
});

export default Rodape;
