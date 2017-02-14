import React, { Component } from 'react';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

export default class TopAppBar extends Component {
  static muiName = 'FlatButton';



  render() {

    const divStyle= {
      'height': '100%'
    }

    const appBarStyle= {
      backgroundColor: '#053166',
      'padding-right': '0px',

    }


    const buttonStyle = {
          backgroundColor: '#053166',
          color: 'white',
           'border-left': '2px solid #0E2A4A',
           'height' : '100%'

    };

        const rightButtons = (
            <div style={divStyle}>
              <FlatButton label="About" style={buttonStyle} />
              <FlatButton label="Home" style={buttonStyle} />
            </div>
          );

    return (
      <AppBar title=""
      iconElementLeft={<div><IconButton><ArrowDropDown /></IconButton> <TextField/></div>}
      iconElementRight={rightButtons}
      iconStyleRight={{'margin-top':'0px'}}
      style={appBarStyle}
    />
    );
  }
}
