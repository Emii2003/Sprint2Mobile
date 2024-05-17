import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ButtonClean = props => {
    return (
        <TouchableOpacity style={styles.buttonDark} onPress={props.caminho}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
  );
}

export default ButtonClean;


const styles = StyleSheet.create({
  buttonDark:{
    marginTop: '5vh',
    width: '80vw',
    height: '5vh',
    borderWidth: 2,
    borderColor: "#DC8AA8",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px'
  },
  buttonText:{
    color: '#DC8AA8',
    fontSize: 15,
  }
});