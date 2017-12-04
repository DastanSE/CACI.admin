import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FlatButton, Paper, Dialog, Avatar } from 'material-ui';
import PlusIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { CreateNews } from './CreateNews';

const NEWS = [
  {
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1512111966/ad-sport-tale-of-the-tape1_uudmpb.jpg',
    title: 'Dastan had first bilion',
    introduce:
      'blablablablablablablablablablablablablabla blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablab blablablablablablablabs blablablablablablablablablablablablablablablablablablablablablablablablablablablabla blablablablablablablablablablablablablabla blablablablablablablablablablablablablabla blablablablablablablablabla blablablablabblablablablabblablablablabblablablablab blablablablab blablablablab blablablablab blablablablab la blablablablablablablablablablablablablabla',
    link:
      'https://www.today.com/news/plugging-space-heater-power-strip-can-be-disastrous-here-s-t119463',
  },
  {
    img:
      'https://res.cloudinary.com/cacicloud/image/upload/v1512111966/ad-sport-tale-of-the-tape1_uudmpb.jpg',
    title: 'Dastan had first bilion',
    introduce: 'blablablablablablablablablablablablablabla',
    link:
      'https://www.today.com/news/plugging-space-heater-power-strip-can-be-disastrous-here-s-t119463',
  },
];

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewNewsOpen: false,
      news_title: '',
      news_introduction: '',
      news_link: '',
      news_imgSrc: '',
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
      news_imgSrc: nextProps.img.imgSrc[0],
    });
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  onDrop(files) {
    this.props.uploadImg(files[0]);
  }

  handleSubmit = () => {
    const { news_title, news_introduction, news_link, news_imgSrc } = this.state;
    const data = {
      news_title,
      news_introduction,
      news_link,
      news_imgSrc,
    };
    this.props.createNews(data);
    this.resetState();
  };

  resetState() {
    this.setState({
      news_title: '',
      news_introduction: '',
      news_link: '',
      news_imgSrc: '',
    });
  }

  render() {
    console.log(this.props.img);
    console.log(this.state);
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>News</h1>
          <FlatButton
            label='New News'
            onClick={ () => this.setState({ createNewNewsOpen: true }) }
            primary={ true }
            icon={ <PlusIcon /> }
          />
        </div>
        <Dialog
          title='Create News'
          open={ this.state.createNewNewsOpen }
          actions={ [
            <FlatButton
              label='SUBMIT'
              onClick={ this.handleSubmit }
              primary={ true }
            />,
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ createNewNewsOpen: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <CreateNews
            news_title={ this.state.news_title }
            news_introduction={ this.state.news_introduction }
            news_link={ this.state.news_link }
            news_imgSrc={ this.state.news_imgSrc }
            onDrop={ this.onDrop.bind(this) }
            onEditText={ this.onEditText }
          />
        </Dialog>

        <List>
          {this.props.news.news.map((data, index) => (
            <div className='news-list-container' key={ index }>
              <ListItem
                key={ Math.random() }
                innerDivStyle={ { padding: '3px' } }
                primaryText={
                  <div style={ { display: 'flex', justifyContent: 'space-between' } }>
                    <h3 style={ { margin: '7px 0 0 0', padding: 0 } }>{data.news_title}</h3>
                    <span style={ { margin: '2px 50px 0 0' } }>
                      <FlatButton label='Edit' primary icon={ <EditIcon /> } />
                      <FlatButton label='Delete' secondary icon={ <DeleteIcon /> } />
                    </span>
                  </div>
                }
                nestedItems={ [
                  <div className='news-box'>
                    <img src={ data.news_imgSrc } />
                    <p>{data.news_introduction}</p>
                    <a href={ data.news_link }>More</a>
                  </div>,
                ] }
              />
            </div>
          ))}
        </List>
      </Paper>
    );
  }
}

function mapStateToProps({ img, news }) {
  return { img, news };
}

export default connect(mapStateToProps, actions)(NewsPage);
