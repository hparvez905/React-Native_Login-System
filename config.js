import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyDcUqIUWCFaRqYvOb_bRWiP4iZKHb-9p_8",
  authDomain: "e-gd-58b2b.firebaseapp.com",
  projectId: "e-gd-58b2b",
  storageBucket: "e-gd-58b2b.appspot.com",
  messagingSenderId: "1052554528985",
  appId: "1:1052554528985:web:f9c1b840568070b1a456c8",
  measurementId: "G-ZXXNFQ0XVR"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};