import React, {useContext, useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import {onAuthStateChanged } from "firebase/auth";


const Routes = () => {
    const [user, setUser] = useContext(AuthContext);
    onAuthStateChanged(auth, (user) => {
          setUser(user)
      });

    return(
        <NavigationContainer>
            {user ?<AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
};

export default Routes;