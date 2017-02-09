import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-toolbox/lib/button/Button';
import { Grid, Row, Cell } from 'react-inline-grid';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
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

  <div className="container">
  <div className="left">
    <div className="area">
                 <nav className="main-menu">
                             <ul>
                                 <li>
                                     <a href="#">
                                       <i className="fa fa-list fa-2x"><FontIcon value='favorite' /></i>

                                         <span className="nav-text">
                                             Dashboard
                                         </span>
                                     </a>

                                 </li>
                                 <li className="has-subnav">
                                     <a href="#">
                                       <i className="fa fa-laptop fa-2x"><FontIcon value='add' /></i>
                                         <span className="nav-text">
                                             UI Components
                                         </span>
                                     </a>

                                 </li>
                                 <li className="has-subnav">
                                     <a href="#">
                                        <i className="fa fa-list fa-2x"></i>
                                         <span className="nav-text">
                                             Forms
                                         </span>
                                     </a>

                                 </li>
                                 <li className="has-subnav">
                                     <a href="#">
                                        <i className="fa fa-folder-open fa-2x"></i>
                                         <span className="nav-text">
                                             Pages
                                         </span>
                                     </a>

                                 </li>
                                 <li>
                                     <a href="#">
                                         <i className="fa fa-bar-chart-o fa-2x"></i>
                                         <span className="nav-text">
                                             Graphs and Statistics
                                         </span>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="#">
                                         <i className="fa fa-font fa-2x"></i>
                                         <span className="nav-text">
                                             Typography and Icons
                                         </span>
                                     </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                      <i className="fa fa-table fa-2x"></i>

                                         <span className="nav-text">
                                             Tables
                                         </span>
                                     </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                         <i className="fa fa-map-marker fa-2x"></i>
                                         <span className="nav-text">
                                             Maps
                                         </span>
                                     </a>
                                 </li>
                                 <li>
                                     <a href="#">
                                        <i className="fa fa-info fa-2x"></i>
                                         <span className="nav-text">
                                             Documentation
                                         </span>
                                     </a>
                                 </li>
                             </ul>

                             <ul className="logout">
                                 <li>
                                    <a href="#">
                                          <i className="fa fa-power-off fa-2x"></i>
                                         <span className="nav-text">
                                             Logout
                                         </span>
                                     </a>
                                 </li>
                             </ul>
                         </nav>


               </div>
</div>

<div className="middle">
  <Tabs>
   <Tab label="Item One" >
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
    <Card>
   <CardHeader
     title="Without Avatar"
     subtitle="Subtitle"
     actAsExpander={true}
     showExpandableButton={true}
   />
   <CardActions>
     <FlatButton label="Action1" />
     <FlatButton label="Action2" />
   </CardActions>
   <CardText expandable={true}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
   </CardText>
 </Card>
 <Card>
<CardHeader
  title="Without Avatar"
  subtitle="Subtitle"
  actAsExpander={true}
  showExpandableButton={true}
/>
<CardActions>
  <FlatButton label="Action1" />
  <FlatButton label="Action2" />
</CardActions>
<CardText expandable={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
</CardText>
</Card>
<Card>
<CardHeader
 title="Without Avatar"
 subtitle="Subtitle"
 actAsExpander={true}
 showExpandableButton={true}
/>
<CardActions>
 <FlatButton label="Action1" />
 <FlatButton label="Action2" />
</CardActions>
<CardText expandable={true}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
</CardText>
</Card>
  </div>


  </div>

</div>
    );
  }
}

export default App;
