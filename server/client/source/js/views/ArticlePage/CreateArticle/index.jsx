import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Snackbar } from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Loading } from '../../../components/Global/Loading';
import { Preview } from '../../../components/Global/Preview';

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      article_title: '',
      article_subtitle: '',
      article_type: '',
      article_date: {},
      article_images: props.img.imgSrc,
      article_content: '',
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      article_images: nextProps.img.imgSrc,
    });
  }

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };

  handleSelectFieldChange = name => {
    return (event, index, value) => {
      this.setState({ [name]: value });
    };
  };

  handleDatePicker = name => {
    return (event, date) => {
      this.setState({
        [name]: date,
      });
    };
  };

  onDrop(files) {
    this.props.uploadImg(files[0]);
  }

  handleSubmit = () => {
    const {
      article_title,
      article_subtitle,
      article_type,
      article_date,
      article_content,
      article_images,
    } = this.state;
    const data = {
      article_title,
      article_subtitle,
      article_type,
      article_date,
      article_content,
      article_images,
    };
    this.props.createArticle(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      article_title: '',
      article_subtitle: '',
      article_type: '',
      article_date: {},
      article_images: [],
      article_content: '',
    });
  }

  getStepContent(stepIndex) {
    const { article_title, article_type, article_subtitle, article_date } = this.state;
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            article_title={ article_title }
            article_subtitle={ article_subtitle }
            article_type={ article_type }
            onEditText={ this.onEditText }
            article_date={ article_date }
            onHandleSelectField={ this.handleSelectFieldChange }
            onHandleDatePicker={ this.handleDatePicker }
          />
        );
      case 1:
        return (
          <Step2
            article_images={ this.state.article_images }
            onDrop={ this.onDrop.bind(this) }
            imageIsloading={ this.props.img._imageIsLoading }
          />
        );
      case 2:
        return <Step3 onEditText={ this.onEditText } article_content={ this.state.article_content } />;
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    console.log('create article props: ', this.props);
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div className=''>
        <Paper className='create_event' zDepth={ 2 }>
          <div style={ { paddingTop: 5, paddingLeft: 15 } }>
            <h3>Create Article</h3>
          </div>
          <Stepper activeStep={ stepIndex }>
            <Step>
              <StepLabel>Title, Subtitle and Time</StepLabel>
            </Step>
            <Step>
              <StepLabel>Upload Image</StepLabel>
            </Step>
            <Step>
              <StepLabel>Content</StepLabel>
            </Step>
          </Stepper>
          <div style={ contentStyle }>
            {finished ? (
              <p>
                <a
                  href='#'
                  onClick={ e => {
                    e.preventDefault();
                    this.setState({ stepIndex: 0, finished: false });
                  } }
                >
                  Click here
                </a>{' '}
                to reset the example.
              </p>
            ) : (
              <div>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={ { marginTop: 12 } }>
                  <FlatButton
                    label='Back'
                    disabled={ stepIndex === 0 }
                    onClick={ this.handlePrev }
                    style={ { marginRight: 12 } }
                  />
                  <RaisedButton
                    label={ stepIndex === 2 ? 'Submit' : 'Next' }
                    primary={ true }
                    onClick={ stepIndex === 2 ? this.handleSubmit : this.handleNext }
                  />
                </div>
              </div>
            )}
          </div>
        </Paper>

        {this.state.stepIndex === 2 ? (
          <Paper className='create_event' zDepth={ 2 }>
            <Preview markdown={ this.state.article_content } />
          </Paper>
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

export default connect(mapStateToProps, actions)(CreateArticle);
