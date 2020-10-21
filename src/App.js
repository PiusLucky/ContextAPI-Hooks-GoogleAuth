import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContextAPI from './components/RootComponent'
import { AuthProvider } from "./Firebase/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import {Dashboard} from './components/Dashboard'



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/context-tutorial" component={ContextAPI} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}



export default App;