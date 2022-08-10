import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import NewOffering from './pages/NewOffering'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <Routes>
       
      <Route path="/" element={<NewOffering />} />
  
      </Routes>
    </Routers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
