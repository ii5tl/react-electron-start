import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme.js'

import App from './components/App';
import '../public/react-toolbox/theme.css';
import './index.css';
import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: redA200,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: indigo500,
    },
    appBar: {
   height: 60,
 },
});

ReactDOM.render(
   <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);
