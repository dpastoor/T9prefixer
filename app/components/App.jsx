import React from 'react';
import Numpad from './numPad.jsx';
import Screen from './screen.jsx';
import pre from '../../src/prefixer.js'
export default class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     numbers: "",
     prefixes: "",
     words: ""
   }
 }
 // refs.
 _updateGlobalNum(n) {
   let newNum = this.state.numbers + n;
   this.setState({numbers: newNum});
   let prefixes = pre.t9ToPrefixes(parseInt(newNum));
   this.setState({prefixes: prefixes});
 }
  render() {
    return (
    <div>
      <Screen numbers={this.state.numbers} />
      <Numpad updateGlobalNum={this._updateGlobalNum.bind(this)} />
      <Screen numbers={Array.prototype.join.call(this.state.prefixes)} />
    </div>
  )
  }
};
