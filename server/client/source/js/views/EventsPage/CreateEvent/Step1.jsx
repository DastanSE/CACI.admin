import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextField, DatePicker } from 'material-ui';

export const Step1 = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        value={ props.title }
        onChange={ props.onEditText('title') }
      />
      {/* <TextField
        style={{marginLeft: '2em'}}
        hintText='Set Subtitle'
        value={ props.title }
        onChange={ props.onEditText('Subtitle') }
      /> */}
      <DatePicker
        hintText='Choose event date'
        value={ props.event_date }
        onChange={ props.onHandleDatePicker('event_date') }
      />
    </div>
  );
};

Step1.propTypes = {
  onEditText: PropTypes.func.isRequired,
  title: PropTypes.string,
  onHandleDatePicker: PropTypes.func.isRequired,
  
};