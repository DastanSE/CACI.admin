import React, { Component } from 'react';
import { TextField } from 'material-ui';

export const Step3 = props => {
  return (
    <div>
      <p>Write Content in markdown</p>
      <div style={ { width: '90%', border: '1px solid #eee' } }>
        <TextField
          hintText='for example # Title'
          floatingLabelText='Write your events info in markdown'
          multiLine={ true }
          rows={ 10 }
          value={ props.article_content }
          onChange={ props.onEditText('article_content') }
          fullWidth={ true }
        />
      </div>
    </div>
  );
};
