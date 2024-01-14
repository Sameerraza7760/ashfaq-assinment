import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/productdetail/${product.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        width: "300px",
        cursor: "pointer",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ maxWidth: "100%", marginBottom: "12px" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details as needed */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
