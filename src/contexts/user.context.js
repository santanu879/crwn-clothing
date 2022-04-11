import { createContext, useEffect, useState } from "react";
import {onAuthStateChangedListener,userSignout} from'../utils/firebase/firebase.utils';

//Create user and initial value
export const UserContext=createContext(
    {
        setCurrentUser: () => null,
        currentUser: null,
    }
);

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({});
    const value ={currentUser,setCurrentUser};
  
    useEffect(()=>{
      const unsubscribe=  onAuthStateChangedListener((user)=>{          
            setCurrentUser(user);
        });   

        return unsubscribe;
    },[]);
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};