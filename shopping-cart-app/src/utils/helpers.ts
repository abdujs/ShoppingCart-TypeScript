export const calculateTotal = (items: { price: number; quantity: number }[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};