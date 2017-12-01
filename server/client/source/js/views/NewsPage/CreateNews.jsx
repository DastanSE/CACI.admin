import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Snackbar } from 'material-ui';
import Dropzone from 'react-dropzone';
import { Loading } from '../../components/Global/Loading';

class CreateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      introduction: '',
      link: '',
      imgSrc: '',
    };
  }

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };

  onDrop(files) {
    this.props.uploadImg(files[0]);
  }

  handleSubmit = () => {
    const { title, introduction, link, imgSrc } = this.state;
    const data = {
      title,
      introduction,
      link,
      imgSrc,
    };
    this.props.createNews(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      title: '',
      introduction: '',
      link: '',
      imgSrc: '',
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText='Set title'
          floatingLabelText='Write your title'
          value={ this.state.title }
          onChange={ this.onEditText('title') }
        />
        <p>Upload your image: {this.state.imgSrc}</p>
        <Dropzone onDrop={ this.onDrop }>
          <p>
            Drag and drop Image or click here <i className='fa fa-upload' aria-hidden='true' />
            for choose image to upload
          </p>
        </Dropzone>
        <TextField
          hintText='Set introduction'
          value={ this.state.introduction }
          onChange={ this.onEditText('introduction') }
          floatingLabelText='Write your introduction'
          multiLine={ true }
          rows={ 6 }
          fullWidth={ true }
        />
        <TextField
          hintText='Link'
          floatingLabelText='Http link'
          value={ this.state.link }
          onChange={ this.onEditText('link') }
        />
      </div>
    );
  }
}

function mapStateToProps({ img }) {
  return { img };
}

export default connect(mapStateToProps, actions)(CreateNews);
