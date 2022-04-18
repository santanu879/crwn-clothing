import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
     
  } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASk_r5sHcMcJk33_J3RhIHFkkHoLeeo90",
  authDomain: "crwn-clothing-db-cef09.firebaseapp.com",
  projectId: "crwn-clothing-db-cef09",
  storageBucket: "crwn-clothing-db-cef09.appspot.com",
  messagingSenderId: "531522556756",
  appId: "1:531522556756:web:65488895a0180e31b0aec1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    console.log(userAuth);
  };
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect= () => signInWithRedirect(auth,googleProvider);

//db set up
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const addCollectionAndDocuments = async (collectionKey ,objectsToAdd) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    await objectsToAdd.forEach(async (object) => {
      await batch.set(doc(collectionRef, object.title.toLowerCase()), object); 
   
     });
  
    await batch.commit();  
}
export const getCategoriesAndDocuments= async ()=>{
  const collectionRef=collection(db,'categories');
  const q =query(collectionRef);
  const querySnapshot= await getDocs(q);
  const categoryMap= querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items}=docSnapshot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{})

  return categoryMap;
}
//signout User
export const userSignout=async()=>{ await signOut(auth)};

//oauth change listener
  
export const onAuthStateChangedListener= (callback)=> 
   onAuthStateChanged(auth,callback);