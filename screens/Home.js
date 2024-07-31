import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonDark from '../components/ButtonDark';
import ButtonClean from '../components/ButtonClean';

export default function Home({ navigation }) {

  const caminhoCadastro = () =>{
    navigation.navigate("RegistraUsuario")
  }

  const caminhoLogin = () =>{
    navigation.navigate("Login")
  }
  
    return (
        <View style={styles.container}>
         <View style={styles.contentMain}>
            <Image
              style={styles.imgHome}
              source={require('../assets/Home/pana.svg')}  
            />
            <Text style={styles.textMain}> Insight <Text style={styles.innerText}>IA</Text>
            </Text>

             <ButtonDark name="Cadastre-se" onPress={caminhoCadastro}/>
             <ButtonClean name="Login" onPress= {caminhoLogin}/>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#232222',
  },
  contentMain: {
    display: 'flex',
    marginTop: '15vh',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  textMain: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '5vh',
    fontSize: '1.3rem',
    fontStyle: "italic"
  },
  innerText: {
    color: '#A03651'
  },
  imgHome:{
    width: 150,
    height: 150,
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