import React from "react";

import {initializeApp} from 'firebase/app'
import { getAuth, signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
  signOut } from "firebase/auth";
import {getFirestore,doc,setDoc,getDoc} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyC4IHDAnYYcnLRlIbMqiqp5uviFP4q5HsE",
    authDomain: "clothing-app-7b41e.firebaseapp.com",
    projectId: "clothing-app-7b41e",
    storageBucket: "clothing-app-7b41e.appspot.com",
    messagingSenderId: "10137768965",
    appId: "1:10137768965:web:5bb0e8ee741e9a7c76b86c"
  };
  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth=getAuth();

export const signinwithgooglepopup = ()=> signInWithPopup(auth,provider)

export const db = getFirestore();



export const createAuthUserDocumentFromAuth = async(email,password,)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signinwauthithemailandpassword = async(email,password,)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}
export const SingOUtAuth=()=>signOut(auth)



export const createUserDocumentFromAuth = async (userAuth,additionalobject={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log("llllllllll",userDocRef)
  const userSnapshot = await getDoc(userDocRef);
  // console.log("usersnapshot",userSnapshot)
  // console.log("exist",userSnapshot.exists())
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // console.log("uuuuuuuuuuuuuu")
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalobject,
      });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
