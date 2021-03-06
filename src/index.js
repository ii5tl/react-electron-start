import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme.js'
import {Router, Route, IndexRoute, Redirect} from "react-router";
import createBrowserHistory from "history/lib/createHashHistory";

import App from './components/App';
import '../public/react-toolbox/theme.css';
import './index.css';
import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
let history = createBrowserHistory({ queryKey: false });

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

// let initializer = (nextState, replaceState, callback) => {
//   Apis.instance("wss://bitshares.openledger.info/ws", true).init_promise.then((res) => {
//     console.log("Connected to: ", res[0]);
//     Apis.instance().db_api().exec("set_subscribe_callback", [updateListener, true]);
//     return callback();
//
//
//   });
//   // return callback();
//
// }

let routes = (

  <Route path="/">
    <IndexRoute component={App}/>
  </Route>
)

ReactDOM.render(
   <MuiThemeProvider theme={muiTheme}>
      <Router history={history} routes={routes}/>
    </MuiThemeProvider>,
  document.getElementById('root')
);
