import Login from './Components/LoginForm/LoginForm';
import BasicExample from './Components/RegisterForm/Form';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/MyFolder/HomePage';
import { useEffect, useState } from 'react';
import { BrowserRouter } from"react-router-dom";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "bootstrap"
function App() {
  const [username,setUserName]=useState('')
  const [password, setPassword]=useState('')
  const [userState,setuserState]=useState(0)

  const onSaveHandler=(enteredData)=>{
    if (enteredData.user.trim().length>=6){
      setuserState(1)
      setUserName(enteredData.user)
      setPassword(enteredData.password)
      localStorage.setItem('userState',"1")
      localStorage.setItem("2",enteredData.user)
    }

  }
  useEffect(()=>{
    const info=localStorage.getItem("userState")
    if (info==='1'){
      setuserState(1)
      setUserName(localStorage.getItem('2'))
    }
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
    {/* <Login myDataSave={onSaveHandler}/> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
