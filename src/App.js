import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'

class BooksApp extends Component {


  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path='/' component={ Main } />
        <Route exact path='/Search' component={ Search } />
        </Switch>
      </div>
    );
  }
}

export default BooksApp


// https://reacttraining.com/react-router/web/api/Switch Switch reference
