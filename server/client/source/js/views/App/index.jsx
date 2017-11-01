import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import Menu from 'components/Global/Menu';

const publicPath = '/';

export const routeCodes = {
  MAINPAGE: publicPath,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ routeCodes.MAINPAGE } component={ MainPage } />
            </Switch>
          </div>        
        </div>
      </BrowserRouter>
    );
  }
}
