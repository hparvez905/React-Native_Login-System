import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
  apiKey: "AIzaSyB4vrMWcnHA3tm8ZDQ82IrsX9Wuh4fc_Vk",
  authDomain: "e-gd-admin-aa8b7.firebaseapp.com",
  projectId: "e-gd-admin-aa8b7",
  storageBucket: "e-gd-admin-aa8b7.appspot.com",
  messagingSenderId: "330692782077",
  appId: "1:330692782077:web:e2526b4b1d6e02b7315b94",
  measurementId: "G-3J774WTRZG"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};