import React, { Component } from 'react';
import { RaisedButton, FlatButton, Paper, TextField, Dialog } from 'material-ui';
import MarkdownElement from '../../components/Global/MarkdownElement';

export default class Modals extends Component {
  render() {
    const actions = [<FlatButton label='Cancel' primary={ true } />];
    return (
      <Dialog open={ this.props.openModal } actions={ actions }>
        <p>test</p>
        <MarkdownElement text={ this.props.events_body } />
      </Dialog>
    );
  }
}
