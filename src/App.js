import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Membre from "./components/Membre";

class App extends Component {
  render() {
    const {titre}=this.props;
    return (
      <div className="App">
        <h1> {titre}</h1>
        <Membre nom ='mohsen'/>
        <Membre nom ='mohsen1'/>
        <Membre nom ='mohsen2'/>
        <Membre nom ='mohsen3'/>
        <Membre nom ='mohsen4' children ='je suis un homme !!!'>
    
        </Membre>
        </div>
    )
  }
}

export default App;
