import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Drawer, Menu, MenuItem, RaisedButton } from 'material-ui';
import EventIcon from 'material-ui/svg-icons/action/event';
import EventsPage from '../EventsPage';
import JobsPage from '../JobsPage';
import JobIcon from 'material-ui/svg-icons/action/work';
import NewsPage from '../NewsPage';
import NewsIcon from 'material-ui/svg-icons/communication/import-contacts';
import LogOutIcon from 'material-ui/svg-icons/action/power-settings-new';
import RepertoirePage from '../RepertoirePage';
import RepertoireIcon from 'material-ui/svg-icons/action/bookmark';
import ArticlePage from '../ArticlePage';
import ArticleIcon from 'material-ui/svg-icons/content/text-format';


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
            <NavLink className='dashboard-links' to={ `${ match.url }/events` }>
              <MenuItem leftIcon={ <EventIcon /> } primaryText='Events' />
            </NavLink>
            <NavLink className='dashboard-links' to={ `${ match.url }/jobs` }>
              <MenuItem leftIcon={ <JobIcon /> } primaryText='Jobs' />
            </NavLink>
            <NavLink className='dashboard-links' to={ `${ match.url }/news` }>
              <MenuItem leftIcon={ <NewsIcon /> } primaryText='News' />
            </NavLink>
            <NavLink className='dashboard-links' to={ `${ match.url }/repertoire` }>
              <MenuItem leftIcon={ <RepertoireIcon /> } primaryText='Repertoire' />
            </NavLink>
            <NavLink className='dashboard-links' to={ `${ match.url }/article` }>
              <MenuItem leftIcon={ <ArticleIcon /> } primaryText='Article' />
            </NavLink>

              <MenuItem leftIcon={ <LogOutIcon /> } primaryText='Logout'/>
              <a href='/api/logout'>logout</a>

          </Menu>
        </Drawer>

        <div style={ { marginLeft: 300 } }>
          <Route path={ `${ match.url }/events` } component={ EventsPage } />
          <Route path={ `${ match.url }/jobs` } component={ JobsPage } />
          <Route path={ `${ match.url }/news` } component={ NewsPage } />
          <Route path={ `${ match.url }/repertoire` } component={ RepertoirePage } />
          <Route path={ `${ match.url }/article` } component={ ArticlePage } />
          <Route exact path={ match.url } render={ () => <h3>Dashboard</h3> } />
        </div>
      </div>
    );
  }
}

export default Dashboard;
