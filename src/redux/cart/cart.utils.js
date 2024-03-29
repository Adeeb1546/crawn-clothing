export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemfromcart = (cartItems, cartItemToremove) => {
  const existingCartItem = cartItems.find(
    cartitem => cartitem.id === cartItemToremove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartitem => cartitem.id !== cartItemToremove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
