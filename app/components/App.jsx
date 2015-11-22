import React from 'react';
import Numpad from './numPad.jsx';
import Screen from './screen.jsx';

export default class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {numbers: ""}
 }
 // refs.
 _updateGlobalNum(n) {
   this.setState({numbers: n})
 }
  render() {
    return (
    <div>
      <Screen numbers={this.state.numbers} />
      <Numpad updateGlobalNum={this._updateGlobalNum.bind(this)} />
    </div>
  )
  }
};
