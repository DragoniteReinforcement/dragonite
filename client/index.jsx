import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

render(<RecoilRoot><App /></RecoilRoot>, document.getElementById('root'));
