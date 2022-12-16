import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { adminApplyAction, adminProject } from '../../../REDUX/Actions/adminAction';
import { Button, Modal } from 'react-bootstrap'
import AdminNavbar from '../Navbar/AdminNavbar'
import './ProjectView.css'

function ProjectView() {

    const Projects = useSelector(state => state.adminProject)
    const apply = useSelector(state => state.adminApply)
    const {applyloading,applyerror,data} = apply;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading,error,projects} = Projects
    console.log(projects);
    useEffect(()=>{
      let info = localStorage.getItem("adminInfo")
      if(info){
        dispatch(adminProject())
      }else{
        navigate("/admin/login")
      }
    },[])
    const handleapply = (id)=>{
      dispatch(adminApplyAction(id))
    }
  return (
    <div>
      <AdminNavbar/>
        <h2>Available Projects</h2>
      <h2>
        {
        
        projects? projects.map((data)=>{
            return(
              <div key={data._id}
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{data.description}.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=>handleapply(data._id)} variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
            )
        }) : 'Aadith'
        }
      </h2>
    </div>
  )
}

export default ProjectView
