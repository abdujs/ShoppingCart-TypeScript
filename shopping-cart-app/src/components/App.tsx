import React from 'react';
import Cart from './Cart';
import Product from './Product';
import { Product as ProductType } from '../types';

const sampleProducts: ProductType[] = [
    { id: '1', name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
    { id: '2', name: 'Product 2', price: 20.49, description: 'Description for Product 2' },
];

const App: React.FC = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="products">
                {sampleProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Cart />
        </div>
    );
};

export default App;