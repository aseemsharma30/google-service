import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/engine-component/Header'
import SearchEngine from './components/engine-component/SearchEngine';
import ResponseClass from './components/engine-component/ResponseClass';
import CheckClass from './components/engine-component/CheckClass';
import Search from './components/engine-component/Search';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <SearchEngine />
            </Route>
            <Route path="/response">
              <ResponseClass />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
