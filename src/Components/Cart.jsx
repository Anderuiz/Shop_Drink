import React, { useState } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const quantity = quantities[item.id] || 0;
      total += item.price * quantity;
    });
    return total.toFixed(2);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={quantities[item.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Precio total: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
