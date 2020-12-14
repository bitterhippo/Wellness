import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Presentational Components
import Nav from './View/Nav';
import Concerns from './View/Concerns';
import Shop from './View/Shop';
import Service from './View/Service';
import Map from './Components/map/Map';
import Employees from './Components/employees/Employees';
import Footer from './Components/footer/Footer';
import OurStuff from './Components/ourStuff/ourStuff';

const location = {
  address: '3905 Major MacKenzie Dr W Unit # 116, Vaughan, Ontario.',
  lat: 43.856941,
  lng: -79.505740,
}

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
      <OurStuff />
      <Employees />
      <Map location={location} zoomLevel={17} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
