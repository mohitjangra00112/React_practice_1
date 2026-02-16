import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { createContext } from 'react';
import Child1 from './components/Child1';

const UserContext = createContext();

function App() {

  const [isLogged , setIsLogged]= useState(false);

  const [count , setCount]= useState(0);

  return (
    <>

{/* {!isLogged ? <Login isLogged={isLogged} setIsLogged={setIsLogged}  /> : <Logout isLogged={isLogged} setIsLogged={setIsLogged} />} */}
{!isLogged ? <Login setIsLogged={setIsLogged}  /> : <Logout setIsLogged={setIsLogged} />}
   <p>Setup local git config</p>
    </>
  )
}

export default App

export {UserContext};
