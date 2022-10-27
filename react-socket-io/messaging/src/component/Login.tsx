import axios from 'axios';
import React, {useRef} from 'react';
import {v4 as uuidV4} from 'uuid';
interface userId{
    setIdUser: Function
}

export const Login = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null)
    
  const handleLogin = async () => {
    try {
        const name = nameRef.current?.value; 
        const password = passwordRef.current?.value;

        console.log(name, password);
        
       const userAdded = await axios.post('/messaging/add-user', {name, password });
       userAdded ? console.log({ok: true}): console.log('wrong');
       
       

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
        <label htmlFor="nicName">
          choose a unique nicName
        </label> <br />
        <input type="text" name="nicName" ref={nameRef} /> <br />
        <input type="password" name="password" ref={passwordRef} placeholder='password'/><br />
        <button onClick={handleLogin}>login</button>
    </div>
  )
}
