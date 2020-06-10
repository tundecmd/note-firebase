import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 const config = {
    apiKey: "AIzaSyAJhEz24H_EJvRIRXEaG1_vBfUU-dNWRZs",
    authDomain: "notepad-2b24d.firebaseapp.com",
    databaseURL: "https://notepad-2b24d.firebaseio.com",
    projectId: "notepad-2b24d",
    storageBucket: "notepad-2b24d.appspot.com",
    messagingSenderId: "484216982870",
    appId: "1:484216982870:web:f380269f2312ef5fb01af7"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;