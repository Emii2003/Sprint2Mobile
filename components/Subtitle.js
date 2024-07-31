import { StyleSheet, Text} from 'react-native';

const Subtitle = props => {
    return (
        <Text style={styles.title}>{props.name}  </Text> 
  );
}

export default Subtitle;

const styles = StyleSheet.create({
    title:{
        fontSize: 15,
        fontWeight: 'light',
        color: '#fff',
        marginBottom: 15
      },
});