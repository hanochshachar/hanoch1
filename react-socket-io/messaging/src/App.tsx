import React, {useState} from 'react';
import { Login } from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Socket} from './component/Chat';


function App() {

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat' element={<Socket/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
