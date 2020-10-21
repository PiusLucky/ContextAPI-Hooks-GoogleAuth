import React, { useContext } from 'react';
import {UserContext} from './RootComponent'
import {SingleUser} from './SingleUser'

export const List = () => {
  const user = useContext(UserContext);
  return (
    <>
      {user.allusers.map((person) => {
        // Recall that the SinglePerson function takes in two arguments (id, name)
        // Since we intend using the function, we need to pass in the required arguments
        // one way is to pass the arguments with their corresponding values in explicitly
        //     return <SinglePerson key={person.id}  id={person.id}  name={person.name}/>;
        // OR
        // using the spread operator to pass in a copy fo an entire object that contains the name & id properties
        //    return <SinglePerson key={person.id} {...person} />;

        // The spread opeartor is the easiest way of passing down props from an object.
        return <SingleUser key={person.id} {...person} />;

      })}
    </>
  );
};

