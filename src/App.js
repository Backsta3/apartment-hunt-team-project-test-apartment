import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Apartment from './Component/Apartment/Apartment';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
    <Router>
      <Switch>
        <Route exact path="/apartment">
          <Apartment></Apartment>
        </Route>

    </Switch>
 </Router>
 </userContext.Provider>
  );
}

export default App;