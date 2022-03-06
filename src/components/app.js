import React, { Component } from 'react';
import Register from './register'
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <main className="App">
      {/* alternate between commenting login and register components when looking at localhost */}
          
          <Login />
          <Register />
      </main>
    );
  }
}
