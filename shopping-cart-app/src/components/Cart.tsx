import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../types';

const Cart: React.FC = () => {
    const { cartItems, removeItem, calculateTotal } = useContext(CartContext);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item: CartItem) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default Cart;