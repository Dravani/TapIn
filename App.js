import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const AppStack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name = "OnBoarding" component = {OnboardingScreen}/>
        <AppStack.Screen name = "Login" component = {LoginScreen}/> 
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App;