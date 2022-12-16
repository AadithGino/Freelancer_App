import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { adminSignup } from '../../../REDUX/Actions/adminAction'
import './Signup.css'

function Signup() {
    const [Name,setName] = useState('')
    const [number,setNumber]= useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()
    const Signup = useSelector(state => state.adminSignup)
    const {loading,error,info} = Signup;
    const navigate = useNavigate()

    const handlesubmit =(e)=>{
        e.preventDefault()
        console.log(Name,number,email,password);
        dispatch(adminSignup(Name,number,email,password))
    }


     useEffect(() => {
      let admininfo = localStorage.getItem("adminInfo")
      if(admininfo){
       navigate("/admin")   
      }
      if(info){
        navigate("/admin/login")
      }
    },[info]);




  return (
    
    <>
    <div className='bagrounds'>
      <div className='logos'>
        <img className='logoimg ' src="https://o.remove.bg/downloads/4e297bca-fee6-495b-8329-880e54b0db67/pencil-logo-vector-template-design-pencil-logo-vector-164600193-removebg-preview.png" alt="" />
      </div>
      <div className='forms'>
      
      <div  className='formcontainers '>
        
       <form action="">
        <p className='login'>FreeLancer Signup</p>
     
      {
        error ? <Alert variant='danger'>
        <strong  style={{color:"red"}}>{error} </strong>
       </Alert> :""
      }

      {
        loading ? <h1>Loading....</h1> : ''
      }

          <input onChange={(e)=>{
            setName(e.target.value)
          }} className='input' type="text" name="Firstname" id="" placeholder='Firstname' />
          <br />
          <input onChange={(e)=>{
            setNumber(e.target.value)
          }} className='input1' type="text" name="email" id="" placeholder='Lastname' />
          <br />
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} className='input1' type="email" name="email" id="" placeholder='Email' />
          <br />
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }}  className='input1' type="password" name='password' placeholder='Password...' />
          <p className='fp'>Forgot Passowrd ...?</p>
          <div className='buttons'>
            
            <button onClick={handlesubmit} className='button1'>Submit</button>
            <Link to={'/admin/login'}>
            <button  className='button2 mt-2'>Login</button>
            </Link>
          </div>
        </form>
       </div>
      
      </div>
    </div>
  </>
  
  )
}

export default Signup
