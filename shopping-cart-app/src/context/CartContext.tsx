import React, { createContext, useReducer, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface CartState {
    items: CartItem[];
}

interface CartContextType {
    state: CartState;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
    calculateTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: { type: string; payload?: any }): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { product: action.payload, quantity: 1 }],
            };
        }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload),
            };
        }
        case 'CLEAR_CART': {
            return { items: [] };
        }
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const addItem = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const removeItem = (productId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const calculateTotal = () => {
        return state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ state, addItem, removeItem, clearCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};