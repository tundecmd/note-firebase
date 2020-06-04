import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABAqCaguH9ZjjnUMC7rdmpDDJ0zHJVGiE",
    authDomain: "notepad-da484.firebaseapp.com",
    databaseURL: "https://notepad-da484.firebaseio.com",
    projectId: "notepad-da484",
    storageBucket: "notepad-da484.appspot.com",
    messagingSenderId: "75246082204",
    appId: "1:75246082204:web:67bfb9b8f2beffd92fb559"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();