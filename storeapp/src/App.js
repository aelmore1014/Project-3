import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from '../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Details from './component/Details';
import ProductList from './component/ProductList';
import Cart from './component/Cart';



function App() {
  return (

    <React.Fragment>
      <Navbar />
      <Switch>
       <Route exact path="/" component={ProductList} />
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
              {/* <Route component={ProductList}> */}

      </Switch>
            
    </React.Fragment>
  );
}

export default App;
