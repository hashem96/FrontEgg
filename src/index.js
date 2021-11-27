import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserHistory } from "history";
import { FronteggProvider } from '@frontegg/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const contextOptions = {
  baseUrl: 'https://hashem.frontegg.com',
};

const history = createBrowserHistory();

const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

ReactDOM.render(
  <Router history={history}>
    <FronteggProvider history={history} contextOptions={contextOptions} headerImage={headerImage}>
      <App />
    </FronteggProvider>
  </Router>,
  document.getElementById('root')
);