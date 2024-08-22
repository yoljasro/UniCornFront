import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ handleSearch, searchTerm, setSearchTerm }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">UNICORN</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline onSubmit={handleSearch} className="mx-auto">
            <FormControl
              type="text"
              placeholder="Поиск товаров"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Поиск</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/men">Мужчинам</Nav.Link>
            <Nav.Link as={Link} to="/women">Женщинам</Nav.Link>
            <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
