import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom'
import './Styles/global.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
