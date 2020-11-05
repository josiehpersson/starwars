import React from 'react';
import './homepage.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from '../Pages/Page';
import Search from '../Search/Search';

export default function HomePage() {
  return (
    <Router>
      <div className="homepage-container">
        <div className="header">
          <Link to="/" pageValue={1}>
            <button type="button" className="home-btn">
              <i className="fas fa-jedi"></i>
            </button>
          </Link>

          <Link to="/search">
            <button type="button" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </Link>
        </div>
        <div className="homepage-body">
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Page pageValue={1}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}