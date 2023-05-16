import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() { //render method is a lifecycle method. Its basic work is to render the html on screen(after compiling the html to JSX first)
    return (
      <div>
        <NavBar/>
        <News pageSize={6} country="in" category="sports"/>
      </div>
    )
  }
}
