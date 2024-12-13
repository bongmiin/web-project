import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './BongMin/pages/Login';
import Page1 from './BongMin/pages/Page1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
