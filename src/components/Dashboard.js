import React from 'react';
import { Link } from "react-router-dom";


export const Dashboard = () => {
  return (
    <div className='item'>
       <Link to="/context-tutorial" className="hoverer">ContextAPI Tutorial</Link>  <span className="divider"></span>
       <Link to="/signin" className="hoverer">Google Authentication Tutorial</Link>
    </div>
  );
};