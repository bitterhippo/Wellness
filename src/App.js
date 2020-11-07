import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components
import Nav from './View/Nav';
import Concerns from './View/Concerns';
import Shop from './View/Shop';
import Service from './View/Service';

function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route path ='/Concerns' exact component={Concerns} />
      <Route path ='/shop' exact component={Shop} />
      <Route path ='/service' exact component={Service} />
      </Switch>
  </div>



    
  </Router>
  );
}

export default App;
