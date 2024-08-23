import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';

const NavigationBar = ({ onFilterSelect }) => {
  const [filter, setFilter] = useState('');

  const handleSelect = (eventKey) => {
    setFilter(eventKey);
    if (onFilterSelect) {
      onFilterSelect(eventKey);  // Filter funksiyasini qo'llash
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://via.placeholder.com/150x50?text=UNICORN"
            alt="Unicorn Logo"
            style={{ width: '150px', height: '50px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Каталог
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Зимняя одежда">Зимняя одежда</Dropdown.Item>
              <Dropdown.Item eventKey="Летняя одежда">Летняя одежда</Dropdown.Item>
              <Dropdown.Item eventKey="Весенняя одежда">Весенняя одежда</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#register">Регистрация</Nav.Link>
            <Nav.Link href="#login">Войти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
