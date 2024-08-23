// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');

  useEffect(() => {
    // Mahsulot ma'lumotlarini backenddan olish
    axios.get(`http://localhost:5000/projectlogos/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div>Yuklanmoqda...</div>;

  const handleAddToCart = () => {
    // Savatga qo'shish funksiyasi
    console.log("Savatga qo'shildi:", product.name, size, deliveryOption);
  };

  return (
    <div className="product-page">
      <div className="carousel">
        {/* Carousel: Mahsulot rasmlari */}
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
        {/* Yana qo'shimcha rasmlar uchun carousel yaratish mumkin */}
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.price} ₽</p>
        <p>{product.description}</p>

        <div className="size-selector">
          <h3>O'lchamni tanlang:</h3>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">O'lchamni tanlang</option>
            {[...Array(21).keys()].map(n => (
              <option key={n} value={30 + n}>{30 + n}</option>
            ))}
          </select>
        </div>

        <div className="delivery-options">
          <h3>Yetkazib berish variantlari:</h3>
          <select value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)}>
            <option value="">Variantni tanlang</option>
            <option value="25-30">25-30 kun (12 185 ₽)</option>
            <option value="9-12">9-12 kun (15 585 ₽)</option>
            <option value="today">Bugun yoki ertaga (yo'q)</option>
          </select>
        </div>

        <button onClick={handleAddToCart}>Savatga qo'shish</button>
      </div>
    </div>
  );
}

export default ProductPage;
