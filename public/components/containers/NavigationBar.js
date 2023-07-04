import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavButton} from '../elements/NavButton';
import 'tailwindcss/tailwind.css';

export const NavigationBar = ({current}) => {
    return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary pb-4">
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0 space-x-4"
                navbarScroll
                style={{ 
                    maxHeight: '400px',
                    fontSize: 'auto'
                }}
            >
                <NavButton text={"Home"} relativeURL={"/"}></NavButton>
                <NavButton text={"Projects"} relativeURL={"/projects"}></NavButton>
                <NavButton text={"About Me"} relativeURL={"/personal"}></NavButton>
                <NavButton text={"Resume"} relativeURL={"/resume"}></NavButton>
            </Nav>
            <Form className="d-flex">
                <Button size='lg' variant="outline-success">Contact Me</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)}
