import React, { Component } from 'react';
import { TextField, DatePicker } from 'material-ui';

export default class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>title</h2>
        <p>day</p>
        <div dangerouslySetInnerHTML={ { __html: this.props.body } } />
      </div>
    );
  }
}
