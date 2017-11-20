import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Loading } from '../../components/Global/Loading';

export const Step2 = props => {
  return (
    <div>
      <p>Upload images</p>
      <Dropzone onDrop={ props.onDrop }>
        <p>
          Drag and drop Image or click here <i className='fa fa-upload' aria-hidden='true' />
          for choose image to upload
        </p>
      </Dropzone>
      <p>Images:</p>
      {props.imageIsloading ? (
        <div>
          <Loading />
        </div>
      ) : (
        ''
      )}

      {props.event_images.map((item, index) => <img key={ index } src={ item } />)}
    </div>
  );
};
