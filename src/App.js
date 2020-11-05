import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
