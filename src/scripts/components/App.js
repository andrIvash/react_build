import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainComponent from './MainComponent';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <MainComponent/>
      </div>
    );
  }
}

export default App;
