import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import CatalogFilter from './components/CatalogFilter';
import ProductGrid from './components/ProductGrid';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality
    console.log("Search term:", searchTerm);
  };

  return (
    <Router>
      <NavigationBar handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <CatalogFilter />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              {/* Qo'shimcha routelar qo'shishingiz mumkin */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
