import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './../components/Home/index';
import { Form } from './../components/Form/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
