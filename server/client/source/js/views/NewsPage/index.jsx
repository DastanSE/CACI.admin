import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Dialog, FontIcon } from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewNewsOpen: false,
    };
  }

  componentDidMount() {
  }

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
            icon={ <PlusIcon />}
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
      </Paper>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(NewsPage);
