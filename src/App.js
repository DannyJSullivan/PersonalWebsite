import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="navBar">
        <h1>Danny Sullivan</h1>
        <a href={"home"}>Contact</a>
        <a href={"about"}>About</a>
        <a href={"code"}>Code</a>
        <a className="active" href={"home"}>Home</a>
      </div>

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <h2>Danny Sullivan</h2>
        <p>
          Welcome to my website!
        </p>
      </header>
    </div>
  );
}

export default App;
