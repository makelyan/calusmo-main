import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <Navbar sticky="top" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="/Home">
          <img
            src={require('../pages/logo.png')}
            width="110"
            height="45"
            className="Top-bar-logo"
            alt="calusmo Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className = "link-list" id = "responsive-navbar-nav">
          <Nav className="link-list">
            <Navbar.Brand href="/Home" className={`nav-item ${currentPage === '/Home' ? 'active' : ''}`}>Home</Navbar.Brand>
            <Navbar.Brand href="/OurTeam" className={`nav-item ${currentPage === '/OurTeam' ? 'active' : ''}`}>Our Team</Navbar.Brand>
            <Navbar.Brand href="/Contact" className={`nav-item ${currentPage === '/Contact' ? 'active' : ''}`}>Contact</Navbar.Brand>
            <Navbar.Brand href="https://www.gofundme.com/f/fund-undergraduate-street-medicine-outreach-ucb?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer" target="_blank" rel="noopener noreferrer" className={`nav-item ${currentPage === '/Donate' ? 'active' : ''}`}>Donate</Navbar.Brand>
            <Navbar.Brand href="https://decal.studentorg.berkeley.edu/courses/7532" target="_blank" rel="noopener noreferrer" className={`nav-item ${currentPage === '/Donate' ? 'active' : ''}`}>Decal</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
          <button class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
          </button>
        </Container>     
    </Navbar>
  );
}

export default Header;
