import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Buttons';
const famille = {
  membre1: {
    nom: 'mohsen1',
    age: 21,
  },
  membre2: {
    nom: 'mohsen2',
    age: 24,
  },
  membre3: {
    nom: 'mohsen3',
    age: 23,
  },
  membre4: {
    nom: 'mohsen4',
    age: 19,
  },
};

class App extends Component {
  state = {
    famille,
    isShow: false,
  };

  handleClick = (num) => {
    const list = { ...this.state.famille };
    list.membre1.age += num;
    this.setState({ list });
  };

  handleChange = (event) => {
    const famille = { ...this.state.famille };
    const newInputValue = event.target.value;
    famille.membre1.nom = newInputValue;
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
  };

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;
    let description = null
    if (isShow) { 
      description = (
    <strong> welcome !!!</strong>
    )
    }
    /*create map of object */
    const liste =Object.keys(famille)
    .map(membre => (
      //en js si on sait pas le nom de variable famille[membre] , dynamique
     <Membre  nom = {famille[membre].nom} 
              age = {famille[membre].age} />
                 ))
    console.log(liste);
    return ( 
      <div className='App'>
        <h1> {titre}</h1>
        <input
          value = {famille.membre1.nom}
          onChange = {this.handleChange}
          type='text'/>
          {liste}
      { /* <Membre nom= {famille.membre4.nom} age= {famille.membre4.age}>
          {
            description 
          }
          <button onClick={this.handleShowDescription}>
           {
              isShow ? 'Cacher' : 'Montrer'
           } </button>
        </Membre>
      */}
        <Button 
        vieillir={() => this.handleClick(5)} />
      </div>
    );
  }
}

export default App;
