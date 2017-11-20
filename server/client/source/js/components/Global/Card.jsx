import React, { Component } from 'react';
import { Dialog } from 'material-ui';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className='event-card'>
        <a className='event-card-img' href=''>
          <img src={ this.props.img } onClick={() => this.setState({show: !this.state.show})} />
        </a>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' />
          <span className='subtle'> {this.props.time}</span>
          <h4 className='event-card-title'>
            <a href=''> {this.props.title}</a>
          </h4>
        </div>
        <div className='event-card-read-more'>
          <i className='fa fa-facebook' aria-hidden='true' />
          <i className='fa fa-weixin' aria-hidden='true' />
          <i className='fa fa-twitter' aria-hidden='true' />
        </div>
      </div>
    );
  }
}
