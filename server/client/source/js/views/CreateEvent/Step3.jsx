import React, { Component } from 'react';
import { TextField } from 'material-ui';

export const Step3 = props => {
  return (
    <div>
      <p>Write Content dont forget use HTML tags</p>
      <div style={ { width: '90%', border: '1px solid #eee' } }>
        <TextField
          hintText='for example <p>New Event</p>'
          floatingLabelText='Write your events info into html tags'
          multiLine={ true }
          rows={ 10 }
          value={ props.event_body }
          onChange={ props.onEditText('event_body') }
          fullWidth={ true }
        />
      </div>
    </div>
  );
};
