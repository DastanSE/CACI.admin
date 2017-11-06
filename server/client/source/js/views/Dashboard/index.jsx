import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Drawer, Menu, MenuItem, RaisedButton } from 'material-ui';
import CreateEvent from '../CreateEvent';

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
              <NavLink to={ `${ match.url }/create_event` }>Create Event</NavLink>
            </MenuItem>
          </Menu>

        </Drawer>

        <div style={{marginLeft: 300}}>
          <Route path={ `${ match.url }/create_event` } component={ CreateEvent } />
          <Route exact path={ match.url } render={ () => <h3>Dashboard</h3> } />
        </div>
      </div>
    );
  }
}

export default Dashboard;
