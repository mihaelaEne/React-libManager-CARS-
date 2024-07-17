import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import CreateNewCar from './components/CreateNewCar';
import Home from './components/Home';
import UpdateCar from './components/UpdateCar';
import DeleteCar from './DeleteCar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


