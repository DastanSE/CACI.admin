import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  RaisedButton,
  FlatButton,
  IconButton,
  Paper,
  TextField,
  Dialog,
  FontIcon,
} from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    title: 'Front End Web Developer',
    experience: '1 year',
    type: 'Internship',
  },
  {
    title: 'Back End Web Developer',
    experience: '3 year',
    type: 'Full-time',
  },
  {
    title: 'Market Research',
    experience: '1-3 year',
    type: 'Part-time',
  },
  {
    title: 'Accounting',
    experience: '5 year',
    type: 'Full-time',
  },
];

class JobsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewJobOpen: false,
    };
  }

  componentDidMount() {}

  render() {
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>Jobs</h1>
          <FlatButton
            label='New Job'
            onClick={ () => this.setState({ createNewJobOpen: true }) }
            primary={ true }
            icon={ <PlusIcon /> }
          />
        </div>
        <Dialog
          title='Crete New Job'
          open={ this.state.createNewJobOpen }
          actions={ [
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ createNewJobOpen: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <p>Jobs test</p>
        </Dialog>

        <Table fixedHeader fixedFooter selectable={ false }>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false } enableSelectAll={ false }>
            <TableRow>
              <TableHeaderColumn colSpan='3' tooltip='Super Header' style={ { textAlign: 'center' } }>
                Available Jobs List
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Work Experience</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Edit / Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={ false }
            deselectOnClickaway={ false }
            showRowHover
            stripedRows
          >
            {tableData.map((data, index) => (
              <TableRow key={ index }>
                <TableRowColumn>{data.title}</TableRowColumn>
                <TableRowColumn>{data.experience}</TableRowColumn>
                <TableRowColumn>{data.type}</TableRowColumn>
                <TableRowColumn>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(JobsPage);
