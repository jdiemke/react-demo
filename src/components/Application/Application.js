import React, { Component } from 'react';
import Person from './../Person/Person';
import './Application.css';
import Counter from '../Counter/Counter';

class Application extends Component {

  state = {
    persons: [],
    show: true
  };

  constructor() {
    super();
    this.switchPersonHandler();
  }

  switchPersonHandler() {
   
    console.log('click!');

    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(json => {
        this.setState({
          persons: json.results
        });
        console.log("num" + json.results.length);
      }
      );
  }

  render() {
    return (
      <div className="Application">
        <h1>Meet Developers Online</h1>
        <div className="card-deck">
          
          {this.state.show && this.state.persons.map(p => (
            <Person name={p.name.title + " " + p.name.first + " " + p.name.last}
              key={ p.name.first + " " + p.name.last}
              picture={p.picture.large}></Person>
          ))}
        </div>
        <p>
          <button onClick={() => this.switchPersonHandler()}>Button!!!</button>
        </p>
      </div>
    );
  }
}

export default Application;
