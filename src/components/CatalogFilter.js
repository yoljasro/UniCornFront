import React from 'react';
import { ListGroup } from 'react-bootstrap';

const CatalogFilter = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>Кроссовки и кеды</ListGroup.Item>
        <ListGroup.Item>Обувь для спорта</ListGroup.Item>
        <ListGroup.Item>Кастомные кроссовки</ListGroup.Item>
        <ListGroup.Item>Ботинки</ListGroup.Item>
        <ListGroup.Item>Тапки</ListGroup.Item>
        <ListGroup.Item>Сапоги</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CatalogFilter;
