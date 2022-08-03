import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import history from "./js/history.js";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HistoryRouter history={history} >
     <Routes>
        <Route path="*" element={<App/>} >
        </Route>
      </Routes>
  </HistoryRouter>
</React.StrictMode>
);


reportWebVitals();
