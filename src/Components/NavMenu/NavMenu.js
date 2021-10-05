import React from 'react';
import logo from "../../images/Logo.png";
import { Link, NavLink } from 'react-router-dom';
import "./NavMenu.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavMenu = () => {
    return (
        <div className="container">
          <Navbar className="navStyle" expand="lg" variant="dark">
            <Container fluid>
              <NavLink to ="/home"><img className="w-50" src={logo} alt="" /></NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav>
                  <NavLink className="items" to="/home">Home</NavLink>
                  <NavLink className="items" to="/courses">Courses</NavLink>
                  <NavLink className="items" to="/blogs">Blogs</NavLink>
                  <NavLink className="items" to="/about">About Us</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
    );
};

export default NavMenu;