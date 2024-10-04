import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cart, decreaseFromCart, addToCart, calculateTotal } = useCart();
  const { token } = useUser();

  return (
    <div className="container mt-5">
      <h2>Tu Carrito</h2>
      <div className="row">
        {cart.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-3">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p><strong>Precio: ${item.price.toLocaleString()}</strong></p>
                <p><strong>Cantidad: {item.quantity}</strong></p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => decreaseFromCart(item.id)}>
                    -
                  </button>
                  <button className="btn btn-success" onClick={() => addToCart(item)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString()}</h3>

      {}
      <button 
        className="btn btn-primary"
        disabled={!token} 
      >
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </button>
    </div>
  );
};

export default Cart;
