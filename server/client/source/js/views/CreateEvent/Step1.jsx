import React, { Component } from 'react';
import { TextField, DatePicker } from 'material-ui';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextField hintText='Set title' />
        <DatePicker hintText='Choose event date' />
      </div>
    );
  }
}
