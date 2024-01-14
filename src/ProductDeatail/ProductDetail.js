// ProductDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Simulate fetching product data from an API
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div className="product-detail-container">
      {product ? (
        <>
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-details">
            <h1>{product.title}</h1>
            <p className="price">Price: ${product.price}</p>
            <p className="description">{product.description}</p>
            {/* Add more details as needed */}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
