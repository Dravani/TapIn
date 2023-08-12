import React from "react";
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return(
      <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone ={() => navigation.replace("Login")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../images/onboarding-img1.png')} />,
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
            
          },
          {
          backgroundColor: '#fdeb93',
            image: <Image source={require('../images/onboarding-img2.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          }
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });