import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        backgroundColor: 'rgb(243, 99, 42)',


    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="py-1">
                <Navbar.Brand href="https://cdn4.vectorstock.com/i/1000x1000/18/83/food-logo-designs-with-spoon-and-fork-vector-24431883.jpg">
                    <img
                        src=""
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Cooking Club logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home" className="fw-bold me-1">Cooking Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto ">
                        <NavLink activeStyle={activeStyle} className=" px-4 my-2 py-2 text-white text-decoration-none" to="/Home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="text-decoration-none px-4 my-2 py-2 text-white" to="/CookingClasses">
                            Cooking Classes
                        </NavLink>
                       
                        <NavLink activeStyle={activeStyle} className="text-decoration-none  text-white  py-2 px-4 my-2" to="/About">
                            About Us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} className="text-decoration-none  text-white  py-2 px-4 my-2" to="/Contact"  >
                            Contact Us
                            
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;