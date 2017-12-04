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
      job_title: '',
      job_type: '',
      job_discription: '',
      job_experience: '',
    };
  }

  componentDidMount() {
    this.props.fetchJobs();
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

  handleSubmit = () => {
    const { job_title, job_type, job_discription, job_experience } = this.state;
    const data = {
      job_title,
      job_type,
      job_discription,
      job_experience,
    };
    this.props.createJob(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      job_title: '',
      job_type: '',
      job_discription: '',
      job_experience: '',
    });
  }

  render() {
    console.log(this.props);
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
        />
        <Dialog
          title='Create New Job'
          open={ this.state.createNewJobOpen }
          actions={ [
            <FlatButton
              key={ 1124 }
              label='Submit'
              onClick={ () => this.handleSubmit() }
              primary={ true }
            />,
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
            job_title={ this.state.job_title }
            job_type={ this.state.job_type }
            job_discription={ this.state.job_discription }
            job_experience={ this.state.job_experience }
            onHandleSelectField={ this.handleSelectFieldChange }
          />
          <p>Jobs Markdown Result</p>
          <MarkdownElement text={ this.state.job_discription } />
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
            {this.props.jobs.jobs.map((data, index) => (
              <TableRow key={ index }>
                <TableRowColumn>
                  <span
                    style={ { cursor: 'pointer' } }
                    onClick={ () => this.setState({ resultModal: true }) }
                  >
                    {data.job_title}
                  </span>
                </TableRowColumn>
                <TableRowColumn>{data.job_experience}</TableRowColumn>
                <TableRowColumn>{data.job_type}</TableRowColumn>
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

function mapStateToProps({ jobs }) {
  return { jobs };
}

export default connect(mapStateToProps, actions)(JobsPage);
