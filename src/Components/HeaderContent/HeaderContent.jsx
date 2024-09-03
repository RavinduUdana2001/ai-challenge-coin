import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';  
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import icons
import './HeaderContent.css';

function HeaderContent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container className="mb-2">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Bootstrap"
            width="34"
            height="34"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mb-2 mb-lg-0 text-center">
            {/* Use Link component for proper navigation */}
            <Nav.Link as={Link} to="/" className="ms-lg-5 m fw-semibold fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="ms-lg-5 fw-semibold fs-5">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ms-lg-5 fw-semibold fs-5">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto mb-2 mb-lg-0 align-items-center"> {/* Add align-items-center class */}
            {/* Add clickable icons */}
            <Nav.Link href="https://www.facebook.com/utechcoins" target="_blank" className="social-icon-link me-lg-4">
              <FaFacebook size={35} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/ushandinitha" target="_blank" className="social-icon-link me-lg-4">
              <FaInstagram size={35} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="https://wa.me/+94710990009" target="_blank" className="social-icon-link me-lg-4">
              <FaWhatsapp size={35} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ushan-dinitha-4564a3a3/" target="_blank" className="social-icon-link">
              <FaLinkedin size={35} className="social-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderContent;
