import { StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonDark from '../components/ButtonDark';


export default function OnboardingScreen({ navigation }) {
  const caminho = () =>{
    navigation.navigate("Home")
  }
    return (
           <Onboarding
                pages={[
                    {
                    backgroundColor: '#272727',
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                    backgroundColor: '#272727',
                    title: 'Onboarding 2',
                    subtitle: <ButtonDark name = "Eai" caminho={caminho}/>,
                    },
                ]}
            /> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727',
  }
});