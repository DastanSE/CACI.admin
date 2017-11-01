import React, { Component } from 'react';
import { RaisedButton, Paper } from 'material-ui';

const style = {
  height: 500,
  width: 500,
  margin: '20px auto',
  textAlign: 'center',
  display: 'block',
};

export default class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Paper style={ style } zDepth={ 2 }>
          <div>
            <h2>
              我们是藝文創薈(Creative Art & Culture
              Institute)。
            </h2>
          </div>
        </Paper>
      </div>
    );
  }
}
