import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {storeData, getItemFor} from './helpers/storageHelper';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const AppStack = createNativeStackNavigator();

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const App = () => {
  const[hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const hasLaunched = await getItemFor(HAS_LAUNCHED);
      if(hasLaunched) {
        setHasLaunched(true);
      }
      else{
        await storeData(HAS_LAUNCHED, "true");
      }
    };
    getData().catch((error) => {console.log(error)})},[])


  if(hasLaunched == null){
    return null;
  }
  else if (hasLaunched == true) {
    return <LoginScreen/>
  } else {
    return(
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name = "OnBoarding" component = {OnboardingScreen}/>
          <AppStack.Screen name = "Login" component = {LoginScreen}/> 
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;