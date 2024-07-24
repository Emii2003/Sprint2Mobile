import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonClean = ({ name, onPress }) => {
  return (
      <TouchableOpacity style={styles.buttonDark} onPress={onPress}>
          <Text style={styles.buttonText}>{name}</Text>
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