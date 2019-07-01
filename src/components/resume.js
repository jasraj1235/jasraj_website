import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
  render(){
    return(
      <div className="resume-page">
        <Grid className="resume-grid">
          <img
            src="https://i.imgur.com/tLgOJLV.png"
            alt="avatar"
            style={{height: '1000px'}}
            />
        </Grid>
      </div>
    )
  }
}

export default Resume;
