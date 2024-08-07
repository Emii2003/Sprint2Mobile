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
    marginTop: 5,
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: "#DC8AA8",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText:{
    color: '#DC8AA8',
    fontSize: 15,
  }
});