import React, { useContext } from 'react';
import {UserContext} from './RootComponent'

export const SingleUser = ({ id, name, occupation}) => {
  const { removeUser } = useContext(UserContext);
  return (
    <div className='item'>
      <h4>{name} <small>[{occupation}]</small></h4>
      <button onClick={() => removeUser(id)}>remove</button>
    </div>
  );
};