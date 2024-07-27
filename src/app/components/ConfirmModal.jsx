// ProductModal.jsx
import React from "react";
import "./ProductModal.css"; // Asegúrate de que la ruta sea correcta

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>{product.title}</h2>
        <img
          src={product.urlImage}
          alt={product.title}
          className="modal-image"
        />
        <p className="modal-price">${product.price}</p>
        <p className="modal-description">
          {product.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
