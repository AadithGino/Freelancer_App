import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProjectDeleteAction, userProjectsViewAction, userSingleProjectAction } from '../../../REDUX/Actions/userActions'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ClinetNavbar from '../Navbar/ClinetNavbar'

function ViewProject() {
    const navigate = useNavigate()
    const projects = useSelector(state=>state.userProjectView)
    const deleteproject = useSelector(state => state.userProjectDelete)
    const dispatch = useDispatch()
    const {deleteloading,deleteerror,deletedata} = deleteproject;
    const {loading,error,data} = projects
    useEffect(()=>{
        dispatch(userProjectsViewAction())
    },[deletedata])
    console.log(data);
    const handledelete = (id)=>{
      console.log(id);  
      dispatch(userProjectDeleteAction(id))
    }
    const handleviewproject = (id)=>{
      navigate("/single-project-view")
      dispatch(userSingleProjectAction(id))
    }
  return (
    <div>
      <ClinetNavbar/>
     {
      data ? data.length==0? <div><h2 className='mt-5'>No Projects Added</h2> <button className='btn btn-success' onClick={()=>{navigate('/project')}} >Add Project</button></div> : data.map((obj)=>{
        return (
          <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header style={{display:"flex"}} >
              <Modal.Title>{obj.title}</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>{obj.description}</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button onClick={()=>{handledelete(obj._id)}} variant='danger'>Delete</Button>
              <Button onClick={()=>{handleviewproject(obj._id)}} variant="primary">Detailed View</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        )
      }) : ''
     }
    </div>
  )
}

export default ViewProject
