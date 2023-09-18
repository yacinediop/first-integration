import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo (1).png';
import {Link} from 'react-router-dom';
const Navbartest = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-white">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='gap-5'>
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to ="/" className='text-dark text-decoration-none me-3 '><h5><span>Acceuil</span></h5></Link>
            <Link to ="/ateliers" className='text-dark text-decoration-none me-3'><h5><span>Ateliers</span></h5></Link>
            <Link to ="/produits" className='text-dark text-decoration-none me-3'><h5><span>Produits</span></h5></Link>
            <Link to ="/a propos de nous" className='text-dark text-decoration-none me-3'><h5><span>A propos de nous</span></h5></Link>
            <Link to ="/contact" className='text-dark text-decoration-none me-3'><h5><span>Contact</span></h5></Link>

          
          
          </Nav>
          <Form className="d-flex">
          <Button variant="danger" className='me-2 rounded-pill'>DEVENIR PARTENAIRE</Button>

             
            <Button variant="outline-danger" className='rounded-pill'>S'IDENTIFIER</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbartest
