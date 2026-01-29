import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
function App() {

  const [isLogged , setIsLogged]= useState(false);

  return (
    <>

{/* {!isLogged ? <Login isLogged={isLogged} setIsLogged={setIsLogged}  /> : <Logout isLogged={isLogged} setIsLogged={setIsLogged} />} */}
{!isLogged ? <Login setIsLogged={setIsLogged}  /> : <Logout setIsLogged={setIsLogged} />}
   <p>Setup local git config</p>
    </>
  )
}

export default App
