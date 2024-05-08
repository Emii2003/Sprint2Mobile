import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ButtonDark = props => {
    return (
        <TouchableOpacity style={styles.buttonDark} onPress={props.caminho}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
  );
}

export default ButtonDark;


const styles = StyleSheet.create({
  buttonDark:{
    marginTop: '5vh',
    backgroundColor: '#A03651',
    width: '80vw',
    height: '5vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'none',
    borderRadius: '8px'
  },
  buttonText:{
    color: '#fff',
    fontSize: 15,
  }
});