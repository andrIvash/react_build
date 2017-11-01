import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainComponent extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  static defaultProps = {
    comments: []
  };
  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    );
  }
  getBody() {
    if (!this.state.isOpen) return null;
    return (
      <div>
        <p> hello main</p>
      </div>
    );
  }
}

export default MainComponent;
