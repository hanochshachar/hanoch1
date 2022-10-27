import React from 'react'
import * as io  from 'socket.io-client';

const socket = io.connect("http://localhost:4000")

export const Socket = () => {

    const sendMessage = () => {
        socket.emit('send_message', {message: "hello"})
      }

  return (
    <div className="Socket">
      <input type="text" name="message" placeholder='message...'  />
      <button onClick={sendMessage}>send</button>
      
    </div>
  )
}
