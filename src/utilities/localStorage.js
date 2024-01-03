const setCart = id => {
    const cartDetails = getCart();
    const doesExist = cartDetails.find(item => item === id);
    if (!doesExist) {
        cartDetails.push(id);
        localStorage.setItem('cart', JSON.stringify(cartDetails));
    }
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart)
    }
    return [];
}

export { setCart, getCart }