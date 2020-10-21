import React, { useEffect, useState } from "react";
import firebaseConfig from './config';

// // if you notice, we passed in any name like "children" object, this is cool because
// // there are two methods of doing this.
//  Method I

//  step 1
//  step1.js

//  export const AuthContext = React.createContext();
//  export const AuthProvider = ({children}) => {
//   const user = "UserABC"
//   <AuthContext.Provider value={{ user }}>
//     {children}
//   </AuthContext.Provider>
//  }
  


//  step 2
//  step2.js

//   //inside of step2.js (Should be ANY component)
//   import React, { useContext } from 'react';
//   import { AuthProvider } from "./step1";
//   function App() {
//     // Just wrap the AuthProvider around anything that utilizes the variable "user"
//     return (
//       <AuthProvider>
//             <Nav />
//       </AuthProvider>
//     );
//   }

//   step3
//   Nav.js
//   import React, { useContext } from 'react';
//   import { AuthContext } from "./step1";

//   export default function Nav() {
//     //get the user state from step1.js
//     const { user } = useContext(AuthContext);
//     return ();
//   }


//  Method II

//  step 1
//  step1.js

//  export const AuthContext = React.createContext();
//  export const AuthProvider = () => {

//   <AuthContext.Provider value={{ user }}>
//     <AnyComponent />
//   </AuthContext.Provider>
//  }
  


//  step 2
//  step2.js

//   //inside of step2.js (Should be Root component)
//   import React, { useContext } from 'react';
//   import {AuthContext} from './step1'

//   export const List = () => {
//   const mainData = useContext(AuthContext);
//   return ();
//   };






export const AuthContext = React.createContext();
// two components - Provider, Consumer

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
    // This observer gets called whenever the user's sign-in state changes.
    firebaseConfig.auth().onAuthStateChanged(setUser);
  }, []);

  // Why empty Array at the end useEffect?

  // Giving it an empty array acts like componentDidMount as in, it only runs once.

  // Giving it no second argument acts as both componentDidMount and componentDidUpdate, as in it runs 
  // first on mount and then on every re-render.

  // Giving it an array as second argument with any value inside, eg , [variable1] 
  // will only execute the code inside your useEffect hook ONCE on mount, as well as whenever that 
  // particular variable (variable1) changes.

  return (
    // Remember that the "Provider" is one of the two components in AuthContext
    // Instead of having to wrap the <AuthContext.Provider> over a component or component
    // we just passed in the children so easy export.
    // we can now import it separately in a different file and use everything in the value prop 
    // whenever need.
    <AuthContext.Provider value={{ user }}>
       {children}
    </AuthContext.Provider>
  );
};


