import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'jquery/src/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './resources/css/navbar.css'
import './resources/css/footer.css';
import './resources/css/home.css';

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
