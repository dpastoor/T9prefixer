import React from 'react';
import Numpad from './numPad.jsx';
import Screen from './screen.jsx';

export default class App extends React.Component{
  render() {
    return (
    <div>
      <Screen numbers={2}/>
      <Numpad />
    </div>
  )
  }
};
