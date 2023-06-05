import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider.jsx';

import 'flowbite';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </UserProvider>,
)
