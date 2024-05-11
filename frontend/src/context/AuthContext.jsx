import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export function AuthContextProvider({children}){
    const [user,setUser] = useState();
    useEffect(()=>{
        if(!user){
            // axios.get('/profile').then(({data})=>{
            //   setUser(data);
            // }).catch(err=>{
            //   setUser(null);
            // })
        }
    },[])
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}