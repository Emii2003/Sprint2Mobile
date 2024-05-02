import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { RxHamburgerMenu } from "react-icons/rx";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
         <main style={styles.contentMain}>
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

             <TouchableOpacity style={styles.buttonDark} onPress={() => navigation.navigate('Cadastro')}>
                 <Text style={styles.buttonText}>Testar</Text>
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