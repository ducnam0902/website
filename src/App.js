import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/services" exact>
        <Services/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path="/sign-up" exact>
        <SignUp/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
      
    </>
  );
}

export default App;
