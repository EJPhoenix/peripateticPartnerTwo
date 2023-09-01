import React, { useState } from 'react';
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    
  return(
    <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Register/>} path='/' />
            <Route element={<Login/>} path='/login' />
            <Route element={<Dashboard/>} path='/dashboard' />
            <Route element={<Main/>} path="/home" />
            <Route element={<Detail/>} path="/itinerary/:id" />
            <Route element={<Update/>} path="/itinerary/edit/:id" />
          </Routes>
        </BrowserRouter>
      </div>
  ) 
}
export default App;