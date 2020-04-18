import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Membre from "./components/Membre";
const famille = {
  membre1: {
    nom: "mohsen1",
    age: 21,
  },
  membre2: {
    nom: "mohsen2",
    age: 22,
  },
  membre3: {
    nom: "mohsen3",
    age: 23,
  },
  membre4: {
    nom: "mohsen4",
    age: 24,
  },
};

class App extends Component {
  state = {
    famille,
  };

  handleClick = () => {
    console.log("display click ");
    debugger
    //faire un copie de la liste famille dans l'objet list
    const list = { ...this.state.famille };
    list.membre1.age += 1;
debugger
    this.setState({ list });
  };

  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <div className="App">
        <h1> {titre}</h1>
        <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
        <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
        <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
        <Membre nom={famille.membre4.nom} age={famille.membre4.age} />
        <button onClick={this.handleClick}> veiller </button>
      </div>
    );
  }
}

export default App;
