import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render() {
    return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Jasraj Singh Kochhar</h2>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '250px'}}
              />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                My name is Jasraj and i'm a senior at University of California Irvine studying
                Computer Science and engineering.
              </p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      +1 (929) 285-8258
                    </ListItemContent>
                  </ListItem>


                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      jkochhar@uci.edu
                    </ListItemContent>
                  </ListItem>


                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      jasraj1235
                    </ListItemContent>
                  </ListItem>

                </List>

              </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}

export default Contact;
