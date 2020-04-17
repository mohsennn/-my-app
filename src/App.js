import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Membre from "./components/Membre";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> React App</h1>
        <Membre nom ='mohsen'/>
        <Membre nom ='mohsen1'/>
        <Membre nom ='mohsen2'/>
        <Membre nom ='mohsen3'/>
        <Membre nom ='mohsen4'/>

        </div>
    );
  }
}

export default App;
