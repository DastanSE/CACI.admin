import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Dialog } from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import OwnMasonry from '../../components/Global/OwnMasonry';

const brakePoints = [350, 576, 769, 992, 1200];

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      events: [],
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    console.log('events_data: ', this.state);
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    return (
      <div className=''>
        <Paper zDepth={ 2 } style={{padding: 10, marginTop: 10}}>

          {this.props.events.data.map((data, index) => {
            return (
              <Card key={ data._id } className='event-card'>
                <CardMedia
                  overlay={
                    <CardActions>
                      <FlatButton label='Delete' />
                      <FlatButton label='Edit' />
                    </CardActions>
                  }
                >
                  <img src={ data.event_images[0] } alt='' />
                </CardMedia>
                <CardTitle title={ data.title } subtitle='Card subtitle' />
                <CardText>{data.title}</CardText>
                <CardActions>
                  <FlatButton label='Read More' primary={ true }  />
                </CardActions>
              </Card>
            );
          })}

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

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(EventsPage);
