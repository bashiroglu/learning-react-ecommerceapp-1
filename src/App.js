import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Default from './components/Default/Default';
import Details from './components/Details/Details';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
