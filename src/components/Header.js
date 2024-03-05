import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"



function BasicExample() {
  
  return (
    <Navbar sticky="top" expand="lg" className="nav-bar">
      {/* sticky: scrollability, expand = "lg", bg-body-tertiary doesnt actually do anything except add border */}
      <Container>
      {/* "containers are used to limit horizontal width*/}
        {/* "while not required, you can wrap the navbar in a <Container> component to center it on a page, or add one within to the only center the contents of a fixed or static top navbar. */}
        {/* "what is expand =?*/}
        {/* ok so there's a CSS import. OK. Im just stupid guys :D */}
        <Navbar.Brand href="../pages/Home.js">
          <img
            src={require('../pages/logo.png')}
            width="110"
            height="45"
            className="Top-bar-logo"
            alt="calusmo Logo"
          />
          {/* What do I want to get done today? Just this topbar? */}
        </Navbar.Brand>
          <ul class="link-list">
            <Navbar.Brand href="../pages/Home.js"className='nav-item underlined'>Home</Navbar.Brand>     
            <Navbar.Brand href="../pages/Services.js" className='nav-item underline'>Our Services</Navbar.Brand>
            <Navbar.Brand href="../pages/OurTeam.js" className='nav-item underline'> Our Team</Navbar.Brand>
            <Navbar.Brand href="../pages/Contact.js" className='nav-item underline'>Contact Us</Navbar.Brand>
            <Navbar.Brand href="../pages/Donations.js" className='nav-item underline'>Donate</Navbar.Brand>
          </ul>
          <button class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
          </button>
        </Container>     
    </Navbar>
  );
}
{/* TODO: get all elements setup and add a nice hover effect */}
export default BasicExample;


