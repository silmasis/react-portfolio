import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import './App.css';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Silavong Matthew Sisaleumsak',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello There!',
        subTitle: 'General Kenobi!',
        text: 'You are a bold one!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Hit me up!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Silavong Matthew Sisaleumsak</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          
        </Container>
      </Router>
    );
  }
}

export default App;
