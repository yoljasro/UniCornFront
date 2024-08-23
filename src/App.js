import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import CatalogFilter from './components/CatalogFilter';
import ProductGrid from './components/ProductGrid';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './components/Product';
import ProductPage from './components/ProductPage'; // Yangi qo'shilgan komponent

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality
    console.log("Search term:", searchTerm);
  };

  const handleFilterSelect = (selectedFilter) => {
    setFilter(selectedFilter);
    // Bu yerda tanlangan filter asosida mahsulotlarni filtrlashni qo'llang
  };

  return (
    <Router>
      <NavigationBar 
        onFilterSelect={handleFilterSelect} 
        handleSearch={handleSearch} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Product/>
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              <Route path="/product/:id" element={<ProductPage />} /> {/* Yangi marshrut qo'shildi */}
              {/* Qo'shimcha routelar qo'shishingiz mumkin */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
