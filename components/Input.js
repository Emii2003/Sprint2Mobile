import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const Input = props => {
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder= {props.placeholder}
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