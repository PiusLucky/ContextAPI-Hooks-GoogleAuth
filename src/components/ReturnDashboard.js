import React from 'react';
import {Link} from 'react-router-dom';

export const ReturnDashboard = () => {
  return (
    <Link to="/"><button className="btn">❤ Return to dashboard</button></Link>
  );
};

