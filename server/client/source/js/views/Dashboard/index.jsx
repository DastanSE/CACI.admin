import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Drawer, Menu, MenuItem, RaisedButton } from 'material-ui';
import CreateEvent from '../CreateEvent';
import EventsPage from '../EventsPage';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
    };
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Drawer open={ this.state.drawerOpen }>
          <Menu>
            <MenuItem>
              <NavLink className='dashboard-links' to={ `${ match.url }/create_event` }>
                <i className='fa fa-calendar-o' aria-hidden='true' /> Create Event
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink className='dashboard-links' to={ `${ match.url }/events` }>
                <i className='fa fa-columns' aria-hidden='true' /> Events
              </NavLink>
            </MenuItem>
            <MenuItem>
              <a href='api/logout'>Logout</a>
            </MenuItem>
          </Menu>
        </Drawer>

        <div style={ { marginLeft: 300 } }>
          <Route path={ `${ match.url }/create_event` } component={ CreateEvent } />
          <Route path={ `${ match.url }/events` } component={ EventsPage } />
          <Route exact path={ match.url } render={ () => <h3>Dashboard</h3> } />
        </div>
      </div>
    );
  }
}

export default Dashboard;
