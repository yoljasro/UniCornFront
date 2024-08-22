import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Кроссовки и кеды', img: 'url_to_image' },
  { id: 2, name: 'Обувь для спорта', img: 'url_to_image' },
  { id: 3, name: 'Кастомные кроссовки', img: 'url_to_image' },
  { id: 4, name: 'Ботинки', img: 'url_to_image' },
  { id: 5, name: 'Тапки', img: 'url_to_image' },
  { id: 6, name: 'Сапоги', img: 'url_to_image' },
];

const ProductGrid = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
