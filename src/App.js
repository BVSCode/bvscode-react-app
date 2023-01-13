
import './App.css';
import CourceSec from './components/CourceSec';
import HomeSec from './components/HomeSec';
import Navbar from './components/Navbar';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Contact from './components/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './components/Blog';


function App() {
  return (
    <>
      <Router>
      <Navbar title="BVSCode" Home="Home" Blog="Blog" Videos="Videos" Contact="Contact" />
        <Switch>
          <Route path="/Videos">
            <Videos/>
          </Route>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <HomeSec />
            <CourceSec Watch="Watch Video" Blog="Browse Blog" Contact="Contact Me" />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
