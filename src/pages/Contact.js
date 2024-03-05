import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function() {
    return (
        <>

    <Header/>
        <h1>Contact Us</h1>
    <Form>
        <h2> Submit Form </h2>
        {/* I don't like "submit form". Change this later!*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="firstName" placeholder="First Name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="lastName" placeholder="Last Name"/>
      </Form.Group>
      <Form.Group className="mb-3" contolId="formQueryBox">
        <Form.Text className="text-muted">
          Enter your message here
        </Form.Text>       
         <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <h2> Our Socials: </h2>

    
    <Footer />
    </>
        
    )
}