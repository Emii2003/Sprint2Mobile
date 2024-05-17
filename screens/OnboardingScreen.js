import { StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonDark from '../components/ButtonDark';
import Input from '../components/Input';
import { FaRegLightbulb } from "react-icons/fa";


export default function OnboardingScreen({ navigation }) {
  const caminho = () =>{
    navigation.navigate("Login")
  }
    return (
           <Onboarding style={styles.container} 
                pages={[
                    {
                      backgroundColor: '#272727',
                      title: 'Bem vindo ao InsightIA',
                      subtitle: "Melhore sua análise de mercado e conquiste inteligência competitiva.",
                    },
                    {
                      backgroundColor: '#272727',
                      title: 'Insira o E-mail corporativo',
                      subtitle: <Input placeholder="E-mail corporativo"/>,
                    },
                    {
                      backgroundColor: '#272727',
                      title: 'Agora crie uma senha',
                      subtitle: <Input placeholder="Senha"/>,
                    },
                    {
                      backgroundColor: '#272727',
                      title: 'Confirme a senha',
                      subtitle: <Input placeholder="Confirmar"/>,
                    },
                    {
                      backgroundColor: '#272727',
                      title: 'Clique em finalizar para confirmar seus dados',
                      subtitle: <ButtonDark name="Finalizar" caminho={caminho}/>,
                    },
                ]}
            /> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});