
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// NAVIGATION
import Nav from "./components/Nav";
// PAGES

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

import "./index.css";
import Timeline from "./pages/Timeline";

const App = () => (
  <div>
    <Nav />
    <div className="">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

