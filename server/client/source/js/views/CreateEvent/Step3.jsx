import React, { Component } from 'react';
import { TextField } from 'material-ui';

export default class Step3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Write Content dont forget use HTML tags</p>
        <div style={{width: '90%', border: '1px solid #eee'}}>
          <TextField
            hintText='Message Field'
            floatingLabelText='MultiLine and FloatingLabel'
            multiLine={ true }
            rows={ 10 }
          />
        </div>
      </div>
    );
  }
}
