import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Handler for the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log({ email });
  };

  return (
    <footer className="bg-light text-center text-lg-start">
      <Container fluid className="text-dark">
        <Row className="pt-4 justify-content-between">
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0">
            <Form onSubmit={handleSubmit}>
              <h5>Join our newsletter!</h5>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                SIGN UP
              </Button>
            </Form>
          </Col>

          <Col lg={{ span: 3, order: 'last' }} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Mailing</h5>
            <ul className="list-unstyled mb-0">
              <li className="text-dark">UC Berkeley Student Organization</li>
              <li className="text-dark">123-456-7890</li>
              <li className="text-dark">undergraduatestreetmedicineoutreach@gmail.com</li>
            </ul>
          </Col>
        </Row>

        {/* Social icons and copyright section */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a href="https://discord.gg/XCngeXWusK" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.linkedin.com/company/usmoberkeley/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/ucb_usmo/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © Undergraduate Street Medicine Outreach, 2024. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;