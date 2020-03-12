import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC1Pfo8vyyHr8Ez_cvjx8lEQjBZWiVvjzg",
    authDomain: "plstoredb.firebaseapp.com",
    databaseURL: "https://plstoredb.firebaseio.com",
    projectId: "plstoredb",
    storageBucket: "plstoredb.appspot.com",
    messagingSenderId: "501733934052",
    appId: "1:501733934052:web:0edd34088176f1fa883df1",
    measurementId: "G-CGKSEJR6P1"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
      const { displayName, email } = userAuth

      const createdUser = new Date();

      try{ 
        await userRef.set({
          displayName,
          email,
          createdUser,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const Provider = new firebase.auth.GoogleAuthProvider();
  Provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(Provider);

  export default firebase;