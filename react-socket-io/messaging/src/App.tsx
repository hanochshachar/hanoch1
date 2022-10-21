import React, {useState} from 'react';
import { Login } from './component/Login';
import * as io  from 'socket.io-client';

const socket = io.connect("http://localhost:4000")

function App() {

  const sendMessage = () => {
    socket.emit('send_message', {message: "hello"})
  }

  return (
    <div className="App">
      <input type="text" name="message" placeholder='message...'  />
      <button onClick={sendMessage}>send</button>
      
    </div>
  );
}

export default App;
