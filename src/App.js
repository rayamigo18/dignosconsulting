import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Travel from './components/pages/Travel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/travel' component={Travel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
