import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Dialog } from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import OwnMasonry from '../../components/Global/OwnMasonry';
import CreateEvent from '../CreateEvent';

const brakePoints = [350, 576, 769, 992, 1200];

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      createEventDialogOpen: false,
      events: [],
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>Events</h1>
          <FlatButton label='Add Event' onClick={() => this.setState({createEventDialogOpen: true})} primary={ true }  />
        </div>

        <Dialog
          title='CreateEvent'
          open={ this.state.createEventDialogOpen }
          actions={ [<FlatButton label='Close' onClick={() => this.setState({createEventDialogOpen: false})} primary={ true }  />] }
          autoScrollBodyContent={true}
        >
          <CreateEvent />
        </Dialog>

        <OwnMasonry brakePoints={ brakePoints } style={{margin: 0}}>
          {this.props.events.data.map((data, index) => {
            return (
              <Card key={ data._id } className='event-card'>
                <CardMedia
                  overlay={
                    <CardActions style={ { margin: '0 auto' } }>
                      <FlatButton style={ { color: '#fff' } } label='Delete' />
                      <FlatButton style={ { color: '#fff' } } label='Edit' />
                    </CardActions>
                  }
                >
                  <img src={ data.event_images[0] } alt='' />
                </CardMedia>
                <CardTitle title={ data.title } subtitle='Card subtitle' />
                <CardText>{data.title}</CardText>
                <CardActions>
                  <FlatButton label='Read More' primary={ true } />
                </CardActions>
              </Card>
            );
          })}
        </OwnMasonry>
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
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(EventsPage);
