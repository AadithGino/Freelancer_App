import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminLogout } from '../../../REDUX/Actions/adminAction';
import './AdminNavbar'
function AdminNavbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = ()=>{
    dispatch(adminLogout())
    navigate("/admin/login")
  }
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >FreeLancer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >Available Projects</Nav.Link>
          <Nav.Link ></Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item >Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={logout} >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
    

    
    
   
    

export default AdminNavbar
