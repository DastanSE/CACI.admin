import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  RaisedButton,
  FlatButton,
  Paper,
  TextField,
  Divider,
  Dialog,
  FontIcon,
  Avatar,
} from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';
import { List, ListItem, makeSelectable } from 'material-ui/List';

const NEWS = [
  {
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1512111966/ad-sport-tale-of-the-tape1_uudmpb.jpg',
    title: 'Dastan had first bilion',
    introduce: 'blablablablablablablablablablablablablabla',
    link:
      'https://www.today.com/news/plugging-space-heater-power-strip-can-be-disastrous-here-s-t119463',
  },
  {
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1512111966/ad-sport-tale-of-the-tape1_uudmpb.jpg',
    title: 'Dastan had first bilion',
    introduce: 'blablablablablablablablablablablablablabla',
    link:
      'https://www.today.com/news/plugging-space-heater-power-strip-can-be-disastrous-here-s-t119463',
  },
];

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewNewsOpen: false,
    };
  }

  componentDidMount() {}

  render() {
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>News</h1>
          <FlatButton
            label='New News'
            onClick={ () => this.setState({ createNewNewsOpen: true }) }
            primary={ true }
            icon={ <PlusIcon /> }
          />
        </div>
        <Dialog
          title='Create News'
          open={ this.state.createNewNewsOpen }
          actions={ [
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ createNewNewsOpen: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <p>News test</p>
        </Dialog>

        <List>
          {NEWS.map((data, index) => (
            <div className='news-list-container' key={ index }>
              <ListItem
                innerDivStyle={ { padding: '20px 10px 16px 151px', height: '150px' } }
                leftAvatar={
                  <img
                    style={ {
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '150px',
                      height: '150px',
                    } }
                    src={ data.img }
                  />
                }
                primaryText={ <h3 style={ { margin: '10px' } }>{data.title}</h3> }
                nestedItems={ [
                  <div className='news-box'>
                    <p>{data.introduce}</p>

                    <FlatButton label='Delete' />
                    <FlatButton label='Edit' />
                    <a href={ data.link }>More</a>
                  </div>,
                ] }
                nestedListStyle={ {
                  marginRight: 0,
                  bacgroundColor: '#ddd',
                } }
              />
            </div>
          ))}
        </List>
      </Paper>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(NewsPage);
