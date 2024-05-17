import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ButtonDark from '../components/ButtonDark';
import ButtonClean from '../components/ButtonClean';

export default function Home({ navigation }) {

  const caminhoCadastro = () =>{
    navigation.navigate("OnboardingScreen")
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
             <Text style={styles.textMain}>
                <Text > Insight IA</Text>
             </Text>

             <ButtonDark name="Cadastre-se" caminho={caminhoCadastro}/>
             <ButtonClean name="Login" caminho= {caminhoLogin}/>
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