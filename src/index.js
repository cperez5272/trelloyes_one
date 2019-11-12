import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store.js'

ReactDOM.render(<App store={store} />, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));