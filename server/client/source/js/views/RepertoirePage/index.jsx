import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FlatButton, Paper, Dialog, Avatar } from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { CreateRepertoire } from './CreateRepertoire';
import MarkdownElement from '../../components/Global/MarkdownElement';
import { RepertoireCard } from './RepertoireCard';

class RepertoirePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createRepertoire: false,
      title: '',
      type: '',
      city: '',
      imgSrc: '.state.imgSrc',
      discription: '',
    };
  }

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };

  handleSelectField = name => {
    return (event, index, value) => {
      this.setState({ [name]: value });
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

  render() {
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>Repertoire</h1>
          <FlatButton
            label='Add New'
            onClick={ () => this.setState({ createRepertoire: true }) }
            primary={ true }
            icon={ <PlusIcon /> }
          />
        </div>
        <Dialog
          title='Create Repertoire'
          open={ this.state.createRepertoire }
          actions={ [
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ createRepertoire: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <CreateRepertoire
            onEditText={ this.onEditText }
            onDrop={ this.onDrop }
            onHandleDatePicker={ this.handleDatePicker }
            onHandleSelectField={ this.handleSelectField }
            city={ this.state.city }
            type={ this.state.type }
            date={ this.state.date }
            title={ this.state.title }
            imgSrc={ this.state.imgSrc }
            discription={ this.state.discription }
          />

          <span>Markdown</span>
          <hr />
          <MarkdownElement text={ this.state.discription } />
        </Dialog>
        <RepertoireCard />
      </Paper>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, actions)(RepertoirePage);
