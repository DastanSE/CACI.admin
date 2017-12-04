import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MarkdownElement from '../../components/Global/MarkdownElement';
import { RaisedButton, FlatButton, IconButton, Paper, Dialog } from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { CreateJob } from './CreateJob';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
      resultModal: false,
      title: '',
      type: '',
      discription: '',
      experience: '',
    };
  }

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

  render() {
    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({ open: false }) } />,
    ];
    console.log(this.state);
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
          title='Job description result'
          open={ this.state.resultModal }
          actions={ [
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ resultModal: false }) }
              primary={ true }
            />,
          ] }
        >
          
        </Dialog>
        <Dialog
          title='Create New Job'
          open={ this.state.createNewJobOpen }
          actions={ [
            <FlatButton
              key={ 11234 }
              label='Close'
              onClick={ () => this.setState({ createNewJobOpen: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <CreateJob
            onEditText={ this.onEditText }
            title={ this.state.title }
            type={ this.state.type }
            discription={ this.state.discription }
            experience={ this.state.experience }
            onHandleSelectField={ this.handleSelectFieldChange }
          />
          <p>Jobs Markdown Result</p>
          <MarkdownElement text={ this.state.discription } />
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
                <TableRowColumn>
                  <span
                    style={ { cursor: 'pointer' } }
                    onClick={ () => this.setState({ resultModal: true }) }
                  >
                    {data.title}
                  </span>
                </TableRowColumn>
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
