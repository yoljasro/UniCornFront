import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projectlogos')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
