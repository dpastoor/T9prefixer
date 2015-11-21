import React from 'react';
import ReactDOM from 'react-dom';

export default class Screen extends React.Component {

  render() {
      return (
        <div id="screen">
          {this.props.numbers}
        </div>
      )
  }
}
