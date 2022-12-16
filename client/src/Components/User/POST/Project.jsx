import React from 'react'
import { useState } from 'react';
import { Button,Container,Form } from 'react-bootstrap';
import { useDispatch, useSelector,} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userProjectAction } from '../../../REDUX/Actions/userActions';
import ClinetNavbar from '../Navbar/ClinetNavbar';

import './Project.css'

function Project() {
  const project = useSelector(state => state.userProject)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const handlesubmit = (e)=>{
    e.preventDefault()
    dispatch(userProjectAction(title,description))
    console.log("adsfasdf");
    navigate("/projects-view")
  }
  console.log(project);
  return (
    
    
      
      <div>
        <ClinetNavbar/>
        <Container>
      <h2>Add Project</h2>
      <div>
      <form action="">
        {/* <label className='me-5' htmlFor="">Title</label>  */}
        
        <input className='project_title' type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Title' /> <br />
        {/* <label className='me-3' htmlFor="">Project Description</label> */}
        <input className='project_description' type="text" onChange={(e)=>setDescription(e.target.value)} placeholder='project description'/> <br />
        <button className='btn btn-success mt-3' onClick={handlesubmit}>SUBMIT</button>
      </form>
      </div>
      </Container> 
    </div>
    

  )
}

export default Project
