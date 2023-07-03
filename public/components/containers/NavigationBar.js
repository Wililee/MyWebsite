import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigationbar = ({current}) => {
    return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
                style={{ 
                    maxHeight: '200px',
                    fontSize: 'auto'
                }}
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/personal">About Me</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Button size='lg' variant="outline-success">Contact Me</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)}
