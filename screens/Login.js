import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

         <main style={styles.contentMain}>
                <Text style = {styles.titleForm}>Bem Vindo</Text>
                <Text style = {styles.subtitleForm}>Não tem uma conta? Cadastre-se</Text>
            {/* Campo de e-mail */}
                <TextInput
                style={styles.input}
                // value={email}
                placeholder="E-mail corporativo"
                keyboardType="email-address"
                autoCapitalize="none"
                />

                {/* Campo de seleção de público-alvo */}
                <TextInput
                style={styles.input}
                // onChangeText={setPublicoAlvo}
                // value={publicoAlvo}
                placeholder="Para qual público sua empresa vende?"
                />

                {/* Botão para iniciar */}
                <TouchableOpacity style={styles.buttonDark}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
         </main>
    </View>
  );
}

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