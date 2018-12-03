import React, { Component } from 'react';
import {IncrementorButton} from './incrementorbutton';
import {DecrementorButton} from './decrementorbutton';


export default class App extends Component {
  constructor(props) {
    super(props)

  
 
    render() {
      return (
        <div className='app'>
          <h1>Alice</h1>
          
          <IncrementorButton title="Bread Left" body='I am smaller!'/>
          <DecrementorButton title="Bread Right" body='I am larger!'/>
        </div>
      );
    }
  }
}
