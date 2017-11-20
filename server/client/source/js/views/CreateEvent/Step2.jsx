import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Loading } from '../../components/Global/Loading';

export default class Step2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Upload images</p>
        <Dropzone onDrop={ this.props.onDrop }>
          <p>
            Drag and drop Image or click here <i className='fa fa-upload' aria-hidden='true' />
            for choose image to upload
          </p>
        </Dropzone>
        <p>Images:</p>
        {this.props.imageIsloading ? (
          <div>
            <Loading />
          </div>
        ) : (
          ''
        )}

        {this.props.event_images.map((item, index) => <img key={index} src={ item } />)}
      </div>
    );
  }
}
