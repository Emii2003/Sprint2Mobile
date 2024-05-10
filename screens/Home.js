import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ButtonDark from '../components/ButtonDark';

export default function Home({ navigation }) {

  const caminho = () =>{
    navigation.navigate("Login")
  }
 

    return (
        <View style={styles.container}>
         <View style={styles.contentMain}>
            <Image
              style={styles.imgHome}
              source={require('../assets/Home/bro.svg')}  
            />
             <Text style={styles.textMain}>
                <Text > Melhore sua análise de mercado</Text>
                {'\n'}
                <Text> e conquiste inteligência</Text>
                {'\n'}
                <Text> competitiva.</Text>
             </Text>

             <ButtonDark name="Sair da sua conta" caminho={caminho}/>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727',
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
    fontWeight: 'bold',
    marginTop: '5vh',
    fontSize: '1.3rem',
  },
  imgHome:{
    width: 250,
    height: 250,
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