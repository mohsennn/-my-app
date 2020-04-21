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
    return (
      <div className='App'>
        <h1> {titre}</h1>
        <input
          value = {famille.membre1.nom}
          onChange = {this.handleChange}
          type='text'
        />
        <Membre nom= {famille.membre1.nom} age= {famille.membre1.age} />
        <Membre nom= {famille.membre2.nom} age= {famille.membre2.age} />
        <Membre nom= {famille.membre3.nom} age= {famille.membre3.age} />
        <Membre nom= {famille.membre4.nom} age= {famille.membre4.age}>
          {
            isShow ? <h3>isShow is true</h3> : <h3> isShow is false</h3>
          }
          <button onClick={this.handleShowDescription}>
           {
              isShow ? 'Montrer' : 'Cacher'
           } </button>
        </Membre>
        <Button 
        vieillir={() => this.handleClick(5)} />
      </div>
    );
  }
}

export default App;
