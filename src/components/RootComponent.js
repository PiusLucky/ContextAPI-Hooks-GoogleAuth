import React, { useState, useContext } from 'react';
import { data } from '../data';
import { List } from './List';
import {ReturnDashboard} from './ReturnDashboard';

export const UserContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [allusers, setAllUsers] = useState(data);
  const removeUser= (id) => {
    setAllUsers((allusers) => {
      return allusers.filter((specific_user) => specific_user.id !== id);
    });
  };
  return (
    // Wrap everything with the provider componenet as anything passed to
    // the "value" prop will be accessed by the children componenet, no matter how deep.
    // The secret of curly brackets
    //   {} - means we are going into the javascript land
    //  {{}} - now, that we are in the javascript land, lets pass in an object
    <UserContext.Provider value={{ removeUser, allusers }}>
      <h3 className="container">Context API Tutorial</h3>
      <List />
      <ReturnDashboard />
    </UserContext.Provider>
  );
};



export default ContextAPI;
