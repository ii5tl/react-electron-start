import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme.js'

import App from './App';
import '../public/react-toolbox/theme.css';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

ReactDOM.render(
   <MuiThemeProvider>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
