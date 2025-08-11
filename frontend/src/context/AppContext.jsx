import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const currency = import.meta.env.CURRENCY;

  // Function to add item to cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      //if the product is already in the cart, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      //if the product is not in the cart, then add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  //If we want to remove a product from the cart, we can filter out the product with the given id
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  //update the quantity of the product in the cart
  const updateCartQuantity = (productId, newQuantity) => {
    //if the new quantity is less than or equal to 0, then remove the product from the cart
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    //Otherwise, update the quantity of the product in the cart
    else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to add item to wish list
  const addToWishList = (product) => {
    //check if the product is already in the wish list
    const existProductInWishList = wishList.find(
      (item) => item.id === product.id
    );
    if (!existProductInWishList) {
      //if the product is not in the wish list, then add it to the wish list
      setWishList([...wishList, product]);
    }
  };

  // Function to remove item from wish list
  const removeFromWishList = (productId) => {
    const updatedWhishList = wishList.filter((item) => item.id !== productId);
    setWishList(updatedWhishList);
  };

  //Total price calculation for cart
  const Total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    cart,
    setCart,
    wishList,
    setWishList,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishList,
    removeFromWishList,
    Total,
    currency,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
