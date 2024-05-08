import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const Form = props => {
    return (
        <View style={styles.container}>

         <View style={styles.contentMain}>
                <Text style = {styles.titleForm}>Bem Vindo</Text>
                <Text style = {styles.subtitleForm}>Não tem uma conta? Cadastre-se</Text>
                <Text style = {styles.subtitleForm}>Esqueceu a senha?</Text>

                <TextInput
                style={styles.input}
                placeholder="E-mail corporativo"
                keyboardType="email-address"
                autoCapitalize="none"
                />
                
                <TextInput
                style={styles.input}
                placeholder="Para qual público sua empresa vende?"
                />

                {/* Botão para iniciar */}
                <TouchableOpacity style={styles.buttonDark}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
         </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727',
  },
  header:{
    display: 'flex',
    justifyContent:  'flex-end',
  },
  contentMain: {
    display: 'flex',
    marginTop: '15vh',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  input: {
    backgroundColor: '#232222',
    width: '80%',
    height: 35,
    borderRadius: 8,
    padding: 25,
    marginBottom: 10,
    color: '#DC8AA8'
  },
  titleForm:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20
  },
  subtitleForm:{
    color: '#fff',
    marginBottom: 30
  },
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