import React from 'react';
import { useCart } from '../context/CartContext';
import { Product as ProductType } from '../types';
import { formatPrice } from '../utils/helpers';

interface ProductProps {
    product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product);
    };

    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {formatPrice(product.price)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;