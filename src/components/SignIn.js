import React, { useContext } from "react";
import "../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../Firebase/context";
import { Redirect } from "react-router-dom";
import {ReturnDashboard} from './ReturnDashboard';


export default function SignIn() {
  //get the user state from the context
  const { user } = useContext(AuthContext); 
  // essence of double exclamation mark
  // when user is "null" or ""
  // it does not contain anything
  // !! = false false = true = contains sth
  console.log(!!user) // returns false if user is not authenticated 
                      // (i.e null as passed in AuthContext.js) [casting user to boolean]
  console.log(typeof(!!user)) //boolean

  //this is our config for FirebaseAuth
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // use this link https://firebase.google.com/docs/auth/web/start for more sigin methods
      // You could add Email here
      // You could add Github here
      // And so on ...
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  // If user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
  return (
    <div>
      {!!user ? (
        <Redirect to={{ pathname: "/home" }} />
      ) : (
        <div className="container">
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )}
      <ReturnDashboard />
    </div>
  );
}

