import logoImage from '../../assets/React.svg'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Nav.css'
import { NavLink } from 'react-router-dom'

export function MyNav() {
  return (
    <Navbar className="nav sticky-top z-3 shadow-lg">
      <Container className='container-fluid'>
        <Navbar.Brand href="#home">
        <img src={logoImage} alt="" className='me-2'/>
          learn__React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="shop">Shop</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
