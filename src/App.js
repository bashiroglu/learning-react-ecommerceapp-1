import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Default from './components/Default/Default';
import Details from './components/Details/Details';
// import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        {/* this don't work as intended because fist one matches all <Route path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route component={Default} />*/}
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route component={Default} />
        <Route path="/" component={ProductList} /> {/* we use this teqnique to avoid that proplem */}
        
      </Switch>
    </React.Fragment>
  );
}

export default App;
