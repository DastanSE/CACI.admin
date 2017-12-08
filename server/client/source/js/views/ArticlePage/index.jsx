import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FlatButton, Paper, Dialog } from 'material-ui';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import PlusIcon from 'material-ui/svg-icons/content/add';
import OwnMasonry from '../../components/Global/OwnMasonry';
import CreateArticle from './CreateArticle';

const brakePoints = [350, 576, 769, 992, 1200];

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createArticleDialogOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchArticle();
  }

  render() {
    return (
      <Paper zDepth={ 2 } style={ { padding: '10px', margin: 10 } }>
        <div style={ { display: 'flex', justifyContent: 'space-between' } }>
          <h1>Article</h1>
          <FlatButton
            label='Add Article'
            onClick={ () => this.setState({ createArticleDialogOpen: true }) }
            primary={ true }
            icon={ <PlusIcon />}
          />
        </div>
        <Dialog
          title='Create Article'
          open={ this.state.createArticleDialogOpen }
          actions={ [
            <FlatButton
              label='Close'
              onClick={ () => this.setState({ createArticleDialogOpen: false }) }
              primary={ true }
            />,
          ] }
          autoScrollBodyContent={ true }
        >
          <CreateArticle />
        </Dialog>

        <OwnMasonry brakePoints={ brakePoints } style={ { margin: 0 } }>
          {this.props.article.data.map((data, index) => {
            return (
              <Card key={ data._id } className='event-card'>
                <CardMedia
                  overlay={
                    <CardActions style={ { margin: '0 auto' } }>
                      <FlatButton style={ { color: '#fff' } } label='Delete' />
                      <FlatButton style={ { color: '#fff' } } label='Edit' />
                    </CardActions>
                  }
                >
                  <img src={ data.article_images[0] } alt='' />

                </CardMedia>
                <CardTitle title={ data.article_title } subtitle={data.article_subtitle} />
                <CardText>{data.article_title}</CardText>
                <p>TYPE: {data.article_type}</p>
                <CardActions>
                  <FlatButton label='Read More' primary={ true } />
                </CardActions>
              </Card>
            );
          })}
        </OwnMasonry>
      </Paper>
    );
  }
}

function mapStateToProps({ article }) {
  return { article };
}

export default connect(mapStateToProps, actions)(ArticlePage);
