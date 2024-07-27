import { useState } from "react";
import ConfirmModal from "./ConfirmModal"; // Asegúrate de ajustar la ruta según tu estructura de archivos

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);

  const handleDeleteProduct = (product) => {
    setModalMessage(
      `¿Está seguro de que desea eliminar ${product.title} del carrito?`
    );
    setConfirmAction(() => () => onDeleteProduct(product));
    setShowModal(true);
  };

  const handleCleanCart = () => {
    setModalMessage("¿Está seguro de que desea vaciar el carrito?");
    setConfirmAction(() => onCleanCart);
    setShowModal(true);
  };

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1>Tienda de Libros</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-productocarrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-productocarrito">{product.title}</p>
                      <span className="precio-productocarrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => handleDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={handleCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
      <ConfirmModal
        show={showModal}
        message={modalMessage}
        onConfirm={() => {
          setShowModal(false);
          confirmAction();
        }}
        onCancel={() => setShowModal(false)}
      />
    </header>
  );
};
