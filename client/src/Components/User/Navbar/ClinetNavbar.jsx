import React from 'react'
import { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userlogout, userprofileaction, userProjectAction } from '../../../REDUX/Actions/userActions'
function ClinetNavbar() {

   const userdata = useSelector(state=>state.userProfile)
   const {loading,error,profiledata} = userdata;
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const logout = ()=>{
        dispatch(userlogout())
    navigate("/login")
    }
    useEffect(()=>{
      dispatch(userprofileaction())
    },[])
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >{profiledata ? profiledata.firstname :''}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate("/projects-view")}}>Added Projects</Nav.Link>
          <Nav.Link onClick={()=>{navigate("/project")}}>Add Project</Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={()=>{navigate("/profile")}} >Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={logout} >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default ClinetNavbar
