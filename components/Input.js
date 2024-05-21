import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const Input = props => {
    return (
        <View>
            <TextInput
                style={[styles.input, props.style]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
                returnKeyType={props.returnKeyType}
                onSubmitEditing={props.onSubmitEditing}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#232222',
        width: '80vw',
        height: 35,
        borderRadius: 8,
        padding: 25,
        marginBottom: 10,
        color: '#DC8AA8'
    },
});
