import React, { Component } from 'react';
import { TextField, DatePicker } from 'material-ui';

export const Step1 = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        value={ props.title }
        onChange={ props.onEditText('title') }
      />
      <DatePicker
        hintText='Choose event date'
        value={ props.event_date }
        onChange={ props.onHandleDatePicker('event_date') }
      />
    </div>
  );
};
