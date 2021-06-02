
import React from 'react';
import './index.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Api from './Api';
import About from  './About'
import Contact from './Contact';
import Hook from './Hook'

class Home extends React.Component{
    render(){
        return (
    <Router>
            <div id="container">
                <div id="menu-bar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <Link className="navbar-brand" to="/">My React APP</Link>
  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/hook">Hook</Link>
    </li>
  </ul>
</nav>
                </div>
                <div id="content">
                
           <Route path="/" exact component={Api} ></Route>  
           <Route path="/contact" component={Contact}></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/hook" component={Hook}></Route>
                </div>
            </div>
    </Router>
        )
    }
}

export default Home