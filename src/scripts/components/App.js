import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return pug`
      div
        h1 My Component
        p This is my component using pug.
    `;
  }
}

export default App;
