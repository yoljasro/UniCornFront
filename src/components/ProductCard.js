import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:5000${product.image}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price} сум</Card.Text>
        <Button variant="primary">Buyurtma berish</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
