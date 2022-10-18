import React, {useRef} from 'react';
import {v4 as uuidV4} from 'uuid';
interface userId{
    setIdUser: Function
}

export const Login = ({setIdUser}: userId) => {
    const idRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (ev:any) => {
        ev.preventDefault()
        setIdUser(idRef.current?.value)
    }

    const createId = () => {
        setIdUser(uuidV4())
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Enter your id</label>
            <input type="text" ref={idRef} name="id" required />
            <input type="submit" value="login" className='login loginBtns'/>
            <button onClick={createId}>create A new Id</button>
        </form>
    </div>
  )
}
