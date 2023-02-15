import React from 'react'
import { 
  Navbar as RSNavBar,
  NavbarBrand,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div style={{backgroundColor:"transparent"}}>
      <RSNavBar color="transparent" light expand="md">
        <h3 style={{color:"white"}}>Weather App</h3>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">
                <h4 style={{color:"white"}}>Home</h4>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/favourites">
                <h4 style={{color:"white"}}>Favourites</h4>
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </RSNavBar>
    </div>
  )
}
