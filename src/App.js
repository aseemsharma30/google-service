import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/engine-component/Header'
import SearchEngine from './components/engine-component/SearchEngine';
import ResponseClass from './components/engine-component/ResponseClass';
import CheckClass from './components/engine-component/CheckClass';

function App() {
  return (
  <Router>
    <Header/>
    <div>
      <Switch>
        <Route exact path='/' component={SearchEngine} />
        <Route path='/response' component={ResponseClass} />
        <Route path='/check' component={CheckClass} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
