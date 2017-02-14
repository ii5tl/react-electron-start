import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


import Button from 'react-toolbox/lib/button/Button';
import { Grid, Row, Cell } from 'react-inline-grid';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';



import IconButton from 'material-ui/IconButton';


import TopAppBar from './TopAppBar';
import TopNavBar from './TopNavBar';
import BetSlip from './BetSlip';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const iconStyles = {
  marginRight: 24,
}
function handleActive(tab) {
  // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// const appBarStyle= {
//   backgroundColor: '#0F4D91',
// }
//
// class Login extends Component {
//   static muiName = 'FlatButton';
//
//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }


// const Logged = (props) => (
//   <div>
//
//      <FlatButton label="About"  />
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu></div>
// );

// const propTypes = {
//   changeMenu: PropTypes.func,
//
// };

class App extends Component {




  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  changeMenu(entryName) {
      // let index = this.state.menuEntries.indexOf(entry);
      // this.setState({
      //     activeSetting: index
      // });
      // changeViewSetting({activeItemName: entryName});
}

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {






    return (

<div>
    <div className="header">
        <TopAppBar/>
   </div>
  <div className="container">
  <div className="left">
   <TopNavBar/>
 </div>

<div className="middle">
  <Tabs >
   <Tab label="Item Onffe" >
     <div>
       <h2 style={styles.headline}>Tab One</h2>
       <p>
         This is an example tab.
       </p>
       <p>
         You can put any sort of HTML or react component in here. It even keeps the component state!
       </p>
       <Slider name="slider0" defaultValue={0.5} />
     </div>
   </Tab>
   <Tab label="Item Two" >
     <div>
       <h2 style={styles.headline}>Tab Two</h2>
       <p>
         This is another example tab.
       </p>
     </div>
   </Tab>
   <Tab
     label="onActive"
     data-route="/home"
     onActive={handleActive}
   >
     <div>
       <h2 style={styles.headline}>Tab Three</h2>
       <p>
         This is a third example tab.
       </p>
     </div>
   </Tab>
 </Tabs>
 </div>


  <div className="right">
    <BetSlip/>
      <BetSlip/>
      <BetSlip/>
  </div>


  </div>

</div>
    );
  }
}

export default App;
