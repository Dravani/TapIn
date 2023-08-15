import React from "react";

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = getAuth();
// createUserWithEmailAndPassword(auth, email, password)

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    return(
        <auth.Provider value = {{
            user,
            setUser,
            login: async (email, password) => {
                try{
                    await signInWithEmailAndPassword(AuthContext, email, password)
                }
                catch(e){
                    console.log(e);
                }
            },
            register: async(email,password) => {
                try{
                    await createUserWithEmailAndPassword(AuthContext, email, password)
                }
                catch(e){
                    console.log(e);
                }
            },
            logout: async() => {
                try{
                    await signOut(AuthContext)
                }
                catch(e){
                    console.log(e);
                }
            }
        }}>
            {children}
        </auth.Provider>

    );

}
