import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Loading } from '../../components/Global/Loading';

class Step2 extends Component {
  constructor() {
    super();
    this.state = { imgSrc: [] };
  }

  onDrop(files) {
    this.props.uploadImg(files[0]);
  }

  render() {
    return (
      <div>
        <p>Upload images</p>
        <Dropzone onDrop={ this.onDrop.bind(this) }>
          <p>
            Drag and drop Image or click here{' '}
            <i className='fa fa-upload' aria-hidden='true' />
            for choose image to upload
          </p>
        </Dropzone>
        <p>Images:</p>
        {this.props.img._imageIsLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          ''
        )}

      </div>
    );
  }
}

function mapStateToProps({ img }) {
  return { img };
}

export default connect(mapStateToProps, actions)(Step2);
