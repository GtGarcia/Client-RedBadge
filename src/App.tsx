import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Home from './components/Home';
// class App extends Component<TypeProps, StateType> {
// constructor(props: TypeProps){
//   super(props)
//   login: false
// }

//   render() {
//     return(
//       <div>
        
//         <Home state = {this.props.state} sessionToken = {this.props.sessionToken} updateToken = {this.props.updateToken}/>
//       </div>
//     )
//   }

// }

function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}
export default App;
