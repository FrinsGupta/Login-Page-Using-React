import React,{useState} from 'react'
import Png from './Png.png'
import {
  Link
} from "react-router-dom";


function Reglogin() {
  const [login,setLogin]=useState('Login');
  const [ask,setAsk]=useState("Don't have an account?");
  const [asklink,setAsklink]=useState("Register Here");
  const [id,setId]=useState("Login");
  

  const toggleMode=()=>{
    if (login==='Login') {
      setLogin('Register');
      setAsk('Already Registered?');
      setAsklink('Login');
      setId('Set User');
    } else {
      setLogin('Login');
      setAsk("Don't have an account?");
      setAsklink("Register Here");
      setId("Login");
    }
  }

  return (
    <>
    <div className='container'>
        <div className='left'>
         <img src={Png} alt="" />
        </div>
        <div className='right'>
          <h1>{login}</h1>
          <div >
            <div className='input'>
              <label htmlFor="">{id} Id</label>
              <input type="text" name="" id="" placeholder={`Enter ${id} Id`} />
            </div>
            <div className='input'>
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" placeholder='Enter password' />
            </div>
          </div>
          <div className='checkbox'>
            <div className='remem'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
              {login==='Login' && <Link className='link' to="/">Forgot Password?</Link>}
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Agree to <Link className='link' to="/">Terms & Conditions</Link></label>
            </div>
          </div>
               <div className='btn' >
            <button  >{login}</button>
          </div>
          <div className='register' ><p>{ask}&nbsp; <Link className='link' to="/" onClick={toggleMode}> {asklink}</Link></p></div>
        </div>
      </div>
    </>
  )
}

export default Reglogin


