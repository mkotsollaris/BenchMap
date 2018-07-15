import React, { Component } from 'react';
import {GoogleMap} from './GoogleMap';
import {OpenLayerMap} from './OpenLayerMap'

class App extends Component {

  render() {
    return (
        <OpenLayerMap/>
    );
  }
}

export default App;
