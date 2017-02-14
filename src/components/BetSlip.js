import React, { Component } from 'react';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class BetSlip extends Component {
  static muiName = 'FlatButton';



  render() {
    const appBarStyle= {
      backgroundColor: '#053166',
      'padding-right': '0px',

    }

    return (

      <Card>
     <CardHeader
       title="Without Avatar"
       subtitle="Subtitle"
       actAsExpander={true}
       showExpandableButton={false}
     >

       <TableBody  style={{ 'padding':'0px'}}>
         <TableRow>
           <TableRowColumn>1</TableRowColumn>
           <TableRowColumn>John Smith</TableRowColumn>
           <TableRowColumn>Employed</TableRowColumn>
         </TableRow>
       </TableBody>
     </CardHeader>
     {/* <CardActions>
       <FlatButton label="Action1" />
       <FlatButton label="Action2" />
     </CardActions> */}
     <CardMedia
           expandable={true}
         >
           <Card>
             <List>


                   <Table style={{ 'padding':'0px'}}>

                       <TableBody  style={{ 'padding':'0px'}}>
                         <TableRow>
                           <TableRowColumn>1</TableRowColumn>
                           <TableRowColumn>John Smith</TableRowColumn>
                           <TableRowColumn>Employed</TableRowColumn>
                         </TableRow>
                         <TableRow>
                           <TableRowColumn>2</TableRowColumn>
                           <TableRowColumn>Randal White</TableRowColumn>
                           <TableRowColumn>Unemployed</TableRowColumn>
                         </TableRow>
                         <TableRow>
                           <TableRowColumn>3</TableRowColumn>
                           <TableRowColumn>Stephanie Sanders</TableRowColumn>
                           <TableRowColumn>Employed</TableRowColumn>
                         </TableRow>
                         <TableRow>
                           <TableRowColumn>4</TableRowColumn>
                           <TableRowColumn>Steve Brown</TableRowColumn>
                           <TableRowColumn>Employed</TableRowColumn>
                         </TableRow>
                       </TableBody>
                     </Table>

                   <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                   <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                   <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                   <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}

                   nestedItems={[
                                      <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                    ]}

                  />
                 </List>
        </Card>
         </CardMedia>
   </Card>


    );

  }}
