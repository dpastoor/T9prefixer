import React from 'react';
import Numpad from './numPad.jsx';
import Screen from './screen.jsx';
import { connect } from 'react-redux'

export default class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {numbers: ""}
 }
 // refs.

  render() {
    return (
    <div>
      <Screen numbers={this.state.numbers} />
      <Numpad />
    </div>
  )
  }
};
