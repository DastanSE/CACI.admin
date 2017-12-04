import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Snackbar } from 'material-ui';
import Dropzone from 'react-dropzone';

export const CreateNews = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        floatingLabelText='Write your title'
        value={ props.news_title }
        onChange={ props.onEditText('news_title') }
      />
      <p>Upload your image: {props.news_imgSrc}</p>
      <Dropzone onDrop={ props.onDrop }>
        <p>
          Drag and drop Image or click here <i className='fa fa-upload' aria-hidden='true' />
          for choose image to upload
        </p>
      </Dropzone>
      <TextField
        hintText='Set introduction'
        value={ props.news_introduction }
        onChange={ props.onEditText('news_introduction') }
        floatingLabelText='Write your introduction'
        multiLine={ true }
        rows={ 6 }
        fullWidth={ true }
      />
      <TextField
        hintText='Link'
        floatingLabelText='Http link'
        value={ props.news_link }
        onChange={ props.onEditText('news_link') }
      />
    </div>
  );
};
