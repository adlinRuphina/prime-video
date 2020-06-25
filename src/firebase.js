import firebase from 'firebase/app';

import 'firebase/auth'; //auth
import 'firebase/database'; //database
import 'firebase/storage'; //storing image

const firebaseConfig = {
  apiKey: 'AIzaSyCFc5mvLl8zdvhE8mxI32gnFRfw5ameACo',
  authDomain: 'prime-aa280.firebaseapp.com',
  databaseURL: 'https://prime-aa280.firebaseio.com',
  projectId: 'prime-aa280',
  storageBucket: 'prime-aa280.appspot.com',
  messagingSenderId: '419339599531',
  appId: '1:419339599531:web:b043e1021ceb4ee01841ee',
}; //copied code from firbase

firebase.initializeApp(firebaseConfig);
//firebase init,mandatory

export default firebase;
//we can use anywhere
