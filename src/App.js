import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Privacy from "./components/pages/Privacy";
import PDS from "./components/pages/PDS";
import Application from "./components/pages/Application";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/services" component={Cards} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/pds" component={PDS} />
          <Route path="/application" component={Application} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
