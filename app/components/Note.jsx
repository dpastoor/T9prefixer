import React from 'react';
import _ from 'lodash';
const RaisedButton = require('material-ui/lib/raised-button');
export default class Note extends React.Component {
  constructor(props) {
   super(props);
 }
// componentWillMount() {
//   this.state.loading = true
// }
// componentDidMount() {
//   this.state.loading = false;
// }
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
   ]], function(row) {
     var rowButtons = _.map(row, function(x) {
       return <li><RaisedButton label={x[0] + ':' + x[1]}
         secondary={true}/></li>;
     });

     return (
       <div style={divSpacing}>
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
