import React from 'react';
import './App.css';
import Register from './componenets/Register/Register';
import { Route, Routes } from 'react-router-dom'
import Login from './componenets/Login/login';
import Home from './componenets/Home/home';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
