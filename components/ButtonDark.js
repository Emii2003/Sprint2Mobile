import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonDark = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonDark} onPress={onPress}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonDark: {
        // marginTop: 300,
        backgroundColor: '#A03651',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderStyle: 'none',
        borderRadius: 8, 
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    }
});

export default ButtonDark;
