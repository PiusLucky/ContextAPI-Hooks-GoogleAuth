import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCs4Ljv2WG0khNP5Y4ROCQlFwa9MgP9gfE",
  authDomain: "myauth-c3676.firebaseapp.com",
  databaseURL: "https://myauth-c3676.firebaseio.com",
  projectId: "myauth-c3676",
  storageBucket: "myauth-c3676.appspot.com",
  messagingSenderId: "1017446690789",
  appId: "1:1017446690789:web:650e44a44f64a6c63d890c"
});


export default firebaseConfig;
