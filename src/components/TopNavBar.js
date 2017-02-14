import React, { Component, PropTypes } from 'react';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';


const propTypes = {
  getComponent: PropTypes.func,

};

class TopNavBar extends Component {
  static muiName = 'FlatButton';




  getComponent(index) {
          // $(this.getDOMNode()).find('li:nth-child(' + index + ')').css({
          //     'background-color': '#ccc'
          // });
          this.setState({
        activeSetting: index
    });
      }


  render() {
    const appBarStyle= {
      backgroundColor: '#053166',
      'padding-right': '0px',

    }
    return (
      <div className="area" >
                   <nav className="main-menu" style={appBarStyle}>
                               <ul>
                                   <li onClick={this.getComponent.bind(this, 1)}>
                                       <a href="#">
                                         <i className="fa fa-list fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>

                                           <span className="nav-text">
                                               Dashboard
                                           </span>
                                       </a>

                                   </li>
                                   <li onClick={this.getComponent.bind(this, 2)} className="has-subnav">
                                       <a href="#">
                                         <i className="fa fa-laptop fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               UI Components
                                           </span>
                                       </a>

                                   </li>
                                   <li onClick={this.getComponent.bind(this, 3)} className="has-subnav">
                                       <a href="#">
                                          <i className="fa fa-list fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Forms
                                           </span>
                                       </a>

                                   </li>
                                   <li onClick={this.getComponent.bind(this, 4)} className="has-subnav">
                                       <a href="#">
                                          <i className="fa fa-folder-open fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Pages
                                           </span>
                                       </a>

                                   </li>
                                   <li onClick={this.getComponent.bind(this, 5)} >
                                       <a href="#">
                                           <i className="fa fa-bar-chart-o fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Graphs and Statistics
                                           </span>
                                       </a>
                                   </li>
                                   <li onClick={this.getComponent.bind(this, 6)}>
                                       <a href="#">
                                           <i className="fa fa-font fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Typography and Icons
                                           </span>
                                       </a>
                                   </li>
                                   <li onClick={this.getComponent.bind(this, 7)}>
                                      <a href="#">
                                        <i className="fa fa-table fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>

                                           <span className="nav-text">
                                               Tables
                                           </span>
                                       </a>
                                   </li>
                                   <li onClick={this.getComponent.bind(this, 8)}>
                                      <a href="#">
                                           <i className="fa fa-map-marker fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Maps
                                           </span>
                                       </a>
                                   </li>
                                   <li onClick={this.getComponent.bind(this, 9)}>
                                       <a href="#">
                                          <i className="fa fa-info fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Documentation
                                           </span>
                                       </a>
                                   </li>
                               </ul>

                               <ul className="logout">
                                   <li>
                                      <a href="#">
                                        <i className="fa fa-list fa-2x"><ArrowDropDown color='white' viewBox='0 0 24 24' style={{'vertical-align': 'middle'}}/></i>
                                           <span className="nav-text">
                                               Logout
                                           </span>
                                       </a>
                                   </li>
                               </ul>
                           </nav>


                 </div>
    );
  }
}


TopNavBar.propTypes = propTypes;

export default TopNavBar;
