import React, { useState } from "react";
import { data } from "../data";
import { ProductModal } from "./ProductModal";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onAddProduct = (product) => {
    const existingProduct = allProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts(updatedProducts);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="container-items">
        {data.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img
                src={product.urlImage}
                alt={product.title}
                onClick={() => handleImageClick(product)}
                style={{ cursor: "pointer" }}
              />
            </figure>
            <div className="info-product">
              <h2>{product.title}</h2>
              <p className="price">${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};
