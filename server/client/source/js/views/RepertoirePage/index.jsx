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
import OwnMasonry from '../../components/Global/OwnMasonry';
const brakePoints = [350, 576, 769, 992, 1200];

class RepertoirePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createRepertoire: false,
      repertoire_title: '',
      repertoire_type: '',
      repertoire_city: '',
      repertoire_imgSrc: '',
      repertoire_discription: '',
      repertoire_date: {},
    };
  }

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      repertoire_imgSrc: nextProps.img.imgSrc[0],
    });
  }

  componentDidMount() {
    this.props.fetchRepertoire();
  }

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
  handleSubmit = () => {
    const {
      repertoire_title,
      repertoire_type,
      repertoire_city,
      repertoire_imgSrc,
      repertoire_discription,
      repertoire_date,
    } = this.state;
    const data = {
      repertoire_title,
      repertoire_type,
      repertoire_city,
      repertoire_imgSrc,
      repertoire_discription,
      repertoire_date,
    };
    this.props.createRepertoire(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      repertoire_title: '',
      repertoire_type: '',
      repertoire_city: '',
      repertoire_imgSrc: '',
      repertoire_discription: '',
      repertoire_date: {},
    });
  }

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
              label='Submit'
              onClick={ this.handleSubmit }
              primary={ true }
            />,
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
            onDrop={ this.onDrop.bind(this) }
            onHandleDatePicker={ this.handleDatePicker }
            onHandleSelectField={ this.handleSelectField }
            repertoire_city={ this.state.repertoire_city }
            repertoire_type={ this.state.repertoire_type }
            repertoire_date={ this.state.repertoire_date }
            repertoire_title={ this.state.repertoire_title }
            repertoire_imgSrc={ this.state.repertoire_imgSrc }
            repertoire_discription={ this.state.repertoire_discription }
          />

          <span>Markdown</span>
          <hr />
          <MarkdownElement text={ this.state.repertoire_discription } />
        </Dialog>
        <OwnMasonry brakePoints={ brakePoints } style={ { margin: 0 } }>
          {this.props.repertoire.repertoire.map((data, index) => <RepertoireCard key={index} data={data} />)}
        </OwnMasonry>

      </Paper>
    );
  }
}

function mapStateToProps({ repertoire, img }) {
  return { repertoire, img };
}

export default connect(mapStateToProps, actions)(RepertoirePage);
