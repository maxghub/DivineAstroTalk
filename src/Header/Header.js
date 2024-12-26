import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/metropolis'; 
import { FiChevronLeft } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveSection('');
    }
  };

  const handleBackClick = () => {
    setActiveSection('');
    setIsMobileMenuOpen(true);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        {/* Mobile view: Show logo by default, change to Chevron and section title after click */}
        {activeSection === '' ? (
          <div className="d-lg-none d-flex align-items-center">
            <Navbar.Brand href="#home" className="logo">
              <img
                src="./images/DivineLogo.png"
                alt="Logo"
                className="d-inline-block align-top"
                height="40"
              />
            </Navbar.Brand>
          </div>
        ) : (
          <div className="d-lg-none d-flex align-items-center">
            <FiChevronLeft style={{ marginRight: '8px' }} onClick={handleBackClick} />
            {/* <span>{activeSection}</span> */}
            <span>{activeSection === 'Astrologers' ? 'Connect with Astrologers' : activeSection}</span>

          </div>
        )}

        {/* Desktop view: Logo always visible */}
        <Navbar.Brand href="#home" className="logo d-none d-lg-block">
          <img
            src="./images/DivineLogo.png"
            alt="Logo"
            className="d-inline-block align-top"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Toggle className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleToggle}>
          {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
        </Navbar.Toggle>

        <Navbar.Collapse className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : 'd-none'}`}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`nav-link ${isMobileMenuOpen ? '' : 'ps-5'}`} onClick={() => handleSectionClick('Home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={`nav-link ${isMobileMenuOpen ? '' : 'ps-5'}`} onClick={() => handleSectionClick('Services')}>Services</Nav.Link>
            <Nav.Link as={Link} to="/astrologers" className={`nav-link ${isMobileMenuOpen ? '' : 'ps-5'}`} onClick={() => handleSectionClick('Astrologers')}>Astrologers</Nav.Link>
            <Nav.Link as={Link} to="/blogs" className={`nav-link ${isMobileMenuOpen ? '' : 'ps-5'}`} onClick={() => handleSectionClick('Blogs')}>Blogs</Nav.Link>

            {/* Language Dropdown */}
            <select title="English" id="language-dropdown" className={`rounded-sm drop-down ${isMobileMenuOpen ? 'my-3' : 'ms-4 '}`} style={{ border: '1px solid #0E2339', borderRadius: '8px' }}>
              <option href="#" class="drop-option">English</option>
              <option href="#" class="drop-option">Hindi</option>
            </select>

            {/* Get App Button */}
            <div className="btn-div">
              <a href="#" className={` get-app-btn ${isMobileMenuOpen ? 'mt-4' : ''}`}>
                Get App
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
