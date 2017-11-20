import React, { Component } from 'react';
import { TextField, DatePicker } from 'material-ui';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div>
        <TextField
          hintText='Set title'
          value={ this.props.title }
          onChange={ this.props.onEditText('title') }
        />
        <DatePicker
          hintText='Choose event date'
          value={ this.props.event_date }
          onChange={ this.props.onHandleDatePicker('event_date') }
        />

      </div>
    );
  }
}
