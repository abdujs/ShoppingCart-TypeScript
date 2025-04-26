import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../types';

const useCart = () => {
    const { cartItems, addItem, removeItem } = useContext(CartContext);

    const getTotalItems = () => {
        return cartItems.length;
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);
    };

    return {
        cartItems,
        addItem,
        removeItem,
        getTotalItems,
        getTotalPrice,
    };
};

export default useCart;