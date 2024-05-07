import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation }) {
    return (
           <Onboarding
            onSkip={() => navigation.navigate("Home")}
            onDone={() => navigation.navigate("Home")}
                pages={[
                    {
                    backgroundColor: '#272727',
                    // image: <Image source={require('')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                    backgroundColor: '#272727',
                    // image: <Image source={require('')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    }
                ]}
            /> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727',
  },
//   header:{
//     display: 'flex',
//     justifyContent:  'flex-end',
//   },
//   contentMain: {
//     display: 'flex',
//     marginTop: '15vh',
//     alignItems: 'center', 
//     justifyContent: 'center', 
//     flexDirection: 'column'
//   },
//   input: {
//     backgroundColor: '#232222',
//     width: '80%',
//     height: 35,
//     borderRadius: 8,
//     padding: 25,
//     marginBottom: 10,
//     color: '#DC8AA8'
//   },
//   titleForm:{
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20
//   },
//   subtitleForm:{
//     color: '#fff',
//     marginBottom: 30
//   },
//   buttonDark:{
//     marginTop: '5vh',
//     backgroundColor: '#A03651',
//     width: '80vw',
//     height: '5vh',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderStyle: 'none',
//     borderRadius: '8px'
//   },
//   buttonText:{
//     color: '#fff',
//     fontSize: 15,
//   }
});