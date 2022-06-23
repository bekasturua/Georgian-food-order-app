import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCaartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCaartHandler,
  };
  return (
    <CartContext.Provider value={{ cartContext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
