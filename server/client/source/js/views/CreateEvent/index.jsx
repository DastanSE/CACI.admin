import React, { Component } from 'react';
import { RaisedButton, FlatButton, Paper, TextField } from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (
      <div className=''>
        <Paper className='create_event' zDepth={ 2 }>
          <div>
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
                <div>
                  {this.getStepContent(stepIndex)}
                </div>
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
                    onClick={ this.handleNext }
                  />
                </div>
              </div>
            )}
          </div>
        </Paper>
      </div>
    );
  }
}
