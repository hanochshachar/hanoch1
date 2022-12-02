import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './features/components/Login'
import {Register} from './features/components/Register';
import {Chat} from './features/components/chat'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='chat' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
