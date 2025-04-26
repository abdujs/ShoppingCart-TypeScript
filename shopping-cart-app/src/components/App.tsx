import React from 'react';
import { CartProvider } from '../context/CartContext';
import Cart from './Cart';
import Product from './Product';

const App: React.FC = () => {
    return (
        <CartProvider>
            <div>
                <h1>Shopping Cart</h1>
                <Product />
                <Cart />
            </div>
        </CartProvider>
    );
};

export default App;