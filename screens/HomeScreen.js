import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton";

const HomeScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Welcome</Text>
            <FormButton
                buttonTitle = "Logout"
                onPress={() => {}}
                />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9fafd',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    text: {
        fontSize:20,
        color: '#333333'
    }
  });