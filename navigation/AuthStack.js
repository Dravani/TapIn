import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {storeData, getItemFor} from '../helpers/storageHelper';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const AppStack = createNativeStackNavigator();

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const AuthStack = () => {
  let routeName;
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
    routeName = 'Login'
  } else {
    routeName = 'Onboarding'
  }

  return(
      <AppStack.Navigator initialRouteName={routeName}>
          <AppStack.Screen name = "OnBoarding" component = {OnboardingScreen}/>
          <AppStack.Screen name = "Login" component = {LoginScreen}/> 
          <AppStack.Screen name = "Signup" component={SignupScreen} options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
              </View>
          ),
        })}
      />
        </AppStack.Navigator>
    );
  }


export default AuthStack;