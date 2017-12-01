import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { RaisedButton, FlatButton, Paper, TextField, Snackbar } from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Loading } from '../../../components/Global/Loading';
import { Preview } from './Preview';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      title: '',
      event_date: {},
      event_images: props.img.imgSrc,
      event_body: '',
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
      event_images: nextProps.img.imgSrc,
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
    const { title, event_date, event_body, event_images } = this.state;
    const data = {
      title,
      event_date,
      event_body,
      event_images,
    };
    this.props.createEvent(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      title: '',
      event_date: {},
      event_images: [],
      event_body: '',
    });
  }

  getStepContent(stepIndex) {
    const { title, event_date } = this.state;
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            title={ title }
            onEditText={ this.onEditText }
            event_date={ event_date }
            onHandleDatePicker={ this.handleDatePicker }
          />
        );
      case 1:
        return (
          <Step2
            event_images={ this.state.event_images }
            onDrop={ this.onDrop.bind(this) }
            imageIsloading={ this.props.img._imageIsLoading }
          />
        );
      case 2:
        return <Step3 onEditText={ this.onEditText } event_body={ this.state.event_body } />;
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    console.log('create event props: ', this.props);
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div className=''>
        <Paper className='create_event' zDepth={ 2 }>
          <div style={ { paddingTop: 5, paddingLeft: 15 } }>
            <h3>Create Event</h3>
          </div>
          <Stepper activeStep={ stepIndex }>
            <Step>
              <StepLabel>Title and Time</StepLabel>
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
                  onClick={ event => {
                    event.preventDefault();
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
            <Preview body={ this.state.event_body } />
          </Paper>
        ) : (
          ''
        )}

        <Snackbar
          open={ this.props.createEventReducer.openCreateEventSnackbar }
          message='Event has been created'
          autoHideDuration={ 3000 }
        />
      </div>
    );
  }
}

function mapStateToProps({ img, createEventReducer }) {
  return { img, createEventReducer };
}

export default connect(mapStateToProps, actions)(CreateEvent);
