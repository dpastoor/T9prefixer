import React from 'react';
import _ from 'lodash';
const RaisedButton = require('material-ui/lib/raised-button');
export default class Numpad extends React.Component {
  constructor(props) {
   super(props);
 }
// componentWillMount() {
//   this.state.loading = true
// }
// componentDidMount() {
//   this.state.loading = false;
// }
_handleClick(num) {
  this.props.updateGlobalNum(num);
}
 render() {
  // if (this.state.loading) {
  //   return <spinner />
  // }
  let divSpacing = {
     textAlign: 'center',
     marginTop: '5px'
  };
  let buttonSpacing = {
    paddingRight: '5px',
    paddingLeft: '5px'
  };
  let listStyles = {
    listStyles: 'none'
  }
   let buttons = _.map([
   [
     [1, " - "],
     [2, "ABC"],
     [3, "DEF"]
   ],
   [
     [4, "GIH"],
     [5, "JKL"],
     [6, "MNO"]
   ],
   [
     [7, "PQRS"],
     [8, "TUV"],
     [9, "WXYZ"]
   ]], (row) => {
     var rowButtons = _.map(row, (x) => {
       let num = x[0];
       let letters = x[1];
       return <li key={num} onClick = {this._handleClick.bind(this, num)} ><RaisedButton label={num + ':' + letters}
         secondary={true}/></li>;
     });

     return (
       <div style={divSpacing} >
          <ul style={listStyles}>
             {rowButtons}
          </ul>
       </div>
     );

   })

   return (
     <div>{buttons}</div>
   );
 }
}
