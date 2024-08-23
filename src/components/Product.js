import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  if (!product || !product._id) {
    return <div></div>; // yoki boshqa mos xabar
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price} ₽</p>
      </Link>
    </div>
  );
}

export default Product;
