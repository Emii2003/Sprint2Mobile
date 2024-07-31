import { StyleSheet, Text } from 'react-native';

const Title = props => {
    return (
        <Text style={styles.title}>{props.name} </Text>
  );
}

export default Title;


const styles = StyleSheet.create({
    title:{
      flex: 1,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
      },
});