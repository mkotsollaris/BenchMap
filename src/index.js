import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GoogleMap from './GoogleMap'

ReactDOM.render(<GoogleMap/>, document.getElementById('root'));
registerServiceWorker();
