import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from "react-redux";
import * as actions from "../../actions";

class Step2 extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    const newFiles = this.state.files.slice();
    newFiles.push(files);
    this.setState({ files: newFiles });
    this.props.uploadImg(files[0]);

    console.log('uploadImg', files)
  }

  render() {
    console.log('step2 props: ', this.props);
    return (
      <div>
        <p>Upload images</p>
        <Dropzone onDrop={ this.onDrop.bind(this) }>
          <p>
            Drag and drop Image or click here <i
              className='fa fa-mouse-pointer'
              aria-hidden='true'
            />
            for choose image to upload button
          </p>
        </Dropzone>
        <p>Images:</p>
        <ul>
          {this.state.files.map((f, index) => (
            <li key={ index }>
              {f[0].name} - {f[0].size} bytes
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(Step2);
