import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './screens/Main';
import { Cat } from './screens/Cat';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cat/:catId" element={<Cat />} />
        <Route
            path="*"
            element={
                <div>
                    <p>Nothing here!</p>
                </div>
            } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
