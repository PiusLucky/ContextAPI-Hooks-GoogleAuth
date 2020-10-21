import React, { useContext } from 'react';
import { AuthContext } from "../Firebase/context";
import {Redirect} from "react-router-dom";
import firebaseConfig from "../Firebase/config";
import {ReturnDashboard} from './ReturnDashboard';

export default function Home() {
  //get the user state from context
  const { user } = useContext(AuthContext);
  console.log(user)
  const signOut = () => {
    firebaseConfig.auth().signOut()
  }
  
  return (
      <div className="account">
        {!!user ? (
          <div className="container">
            <img src={user.photoURL} />
            <h1>{`Welcome, ${user.displayName}`}</h1>
            <div>
            <span className="spacer"></span>
              <button onClick={signOut} className="btn">Sign Out</button>
            </div>
          </div>
        ) : (
          <Redirect to={{ pathname: "/signin" }} />
        )}

        <ReturnDashboard />
      </div>
  );
}