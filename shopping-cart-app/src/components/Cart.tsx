import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const Cart: React.FC = () => {
    const { state, removeItem, calculateTotal } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {state.items.map(({ product, quantity }) => (
                        <li key={product.id}>
                            {product.name} - {formatPrice(product.price)} x {quantity}
                            <button onClick={() => removeItem(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {formatPrice(calculateTotal())}</h3>
        </div>
    );
};

export default Cart;