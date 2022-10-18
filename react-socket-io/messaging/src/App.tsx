import React, {useState} from 'react';
import { Login } from './component/Login';

function App() {

  const [idUser, setIdUser] = useState()

  return (
    <div className="App">
      {idUser}
      <Login setIdUser={setIdUser}/>
      
    </div>
  );
}

export default App;
