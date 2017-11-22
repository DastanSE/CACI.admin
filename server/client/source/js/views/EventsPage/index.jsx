import React, { Component } from 'react';
import { RaisedButton, FlatButton, Paper, TextField, Dialog } from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    return (
      <div className=''>
        <Paper>
          <Card className='event-card'>
            <CardMedia
              overlay={
                <CardActions>
                  <FlatButton label='Delete' />
                  <FlatButton label='Edit' />
                </CardActions>
              }
            >
              <img
                src='http://res.cloudinary.com/cacicloud/image/upload/v1510129143/partners/support/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6_bk5ilv.png'
                alt=''
              />
            </CardMedia>
            <CardTitle title='Card title' subtitle='Card subtitle' />
            <CardText>Lorem ipsum dolor sit amet,</CardText>
            <CardActions>
              <FlatButton label='Read More' primary={true} />
            </CardActions>
          </Card>
          <Dialog
            title='Please enter your Admin Panel Sign Up Password'
            open={ this.state.open }
            actions={ actions }
          >
            <p>tets</p>
            <div>
              <img src='http://res.cloudinary.com/cacicloud/image/upload/v1510129143/partners/support/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6_bk5ilv.png' />
            </div>          
          </Dialog>
        </Paper>
      </div>
    );
  }
}
