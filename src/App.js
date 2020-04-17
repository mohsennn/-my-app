import React, { Component,Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Membre from "./components/Membre";

class  App extends Component {
  render (){  
  return (
  /* fragment permet d'envelopper le code jsx au lieu d'un balise div vide  */
 <Fragment> 
      <div>
        <div className="App">
          <h1> React App</h1>
        </div>
       </div>
      </Fragment>
      </Membre>
    
  );
  }
}

export default App;
