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
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
