import React, { useContext } from "react";


import {initializeApp} from 'firebase/app'
import { CartContext } from "../../component/contexte/cart";
import { getAuth, signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,onAuthStateChanged } from "firebase/auth";
import {getFirestore
  ,doc
  ,setDoc
  ,getDoc
  ,collection
  ,writeBatch
  ,query
  ,getDocs} from "firebase/firestore"

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const createAuthUserDocumentFromAuth = async(email,password,)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const signinwauthithemailandpassword = async(email,password,)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SingOUtAuth=()=>signOut(auth)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const onAuthStateChangeFirebase= (callback)=>onAuthStateChanged(auth,callback)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const createUserDocumentFromAuth = async (userAuth,additionalobject={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log("userDocRef : ",userDocRef)
  const userSnapshot = await getDoc(userDocRef);
  // console.log("usersnapshot : ",userSnapshot)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addCollectionAndDocuments= async (collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey)
  const Batsh=writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase())
    Batsh.set(docRef,object)
  })
  await Batsh.commit();
  console.log("done")
}
////////////////////////////////////////////// -------------testtest


export const addtalabat= async (collectionKey,objectsToAdd,uid)=>{

  const collectionRef=collection(db,collectionKey)
  const Batsh=writeBatch(db)
  var today = new Date();
  console.log("jjjjjjjjj",today.toString())
  const docRef=doc(collectionRef,today.toString())

  let all=await gettalabat()
  const children = all.concat(objectsToAdd)
  console.log("children ---- ",children)
  console.log("fffffffffffffffffff",objectsToAdd)
  

    Batsh.set(docRef,{objectsToAdd,uid})
  await Batsh.commit();
  console.log("done")
}

export const gettalabat= async ()=>{

  const collectionRef=collection(db,"tale")
  const q =query(collectionRef)
  let ss=[]

  const querySnapShot= await getDocs(q)
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const tata=docSnapShot.data()
    console.log("titel",docSnapShot.data())
    ss.push(docSnapShot.data())
  },{})
  // const newTotalCount = cartItems.reduce((total,item)=> total+item.quantity* item.price,0 )

  console.log("categoryMap",ss)
  // console.log("categoryMap",categoryMap)

  return ss

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getCategoriesAndDocuments= async ()=>{
  const collectionRef=collection(db,"categories")
  const q =query(collectionRef)
  let s=[]
  const querySnapShot= await getDocs(q)
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data()
    console.log("titel",docSnapShot.data())
    s.push(docSnapShot.data())
    
    acc[title.toLowerCase()]=items
    return acc
  },{})
  // const newTotalCount = cartItems.reduce((total,item)=> total+item.quantity* item.price,0 )

  console.log("categoryMap",s)
  console.log("categoryMap",categoryMap)

  return categoryMap
}