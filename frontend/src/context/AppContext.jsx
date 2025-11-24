import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Initialize state from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });

  const [compareList, setCompareList] = useState(() => {
    const savedCompareList = localStorage.getItem("compareList");
    return savedCompareList ? JSON.parse(savedCompareList) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  const currency = "$";

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

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

  // Function to clear all items from cart
  const clearCart = () => {
    setCart([]);
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

  // Function to add item to compare list
  const addToCompare = (product) => {
    const existingProduct = compareList.find((item) => item.id === product.id);
    if (!existingProduct && compareList.length < 4) {
      setCompareList([...compareList, product]);
    } else if (compareList.length >= 4) {
      alert("You can only compare up to 4 products at a time");
    }
  };

  // Function to remove item from compare list
  const removeFromCompare = (productId) => {
    const updatedCompareList = compareList.filter((item) => item.id !== productId);
    setCompareList(updatedCompareList);
  };

  // Authentication functions
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = (userData) => {
    setUser(userData);
  };

  // Order functions
  const placeOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: cart,
      total: Total,
      status: "Processing",
      ...orderData,
    };
    setOrders([...orders, newOrder]);
    setCart([]);
    return newOrder;
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  const value = {
    cart,
    setCart,
    wishList,
    setWishList,
    compareList,
    setCompareList,
    user,
    orders,
    searchQuery,
    setSearchQuery,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishList,
    removeFromWishList,
    addToCompare,
    removeFromCompare,
    login,
    logout,
    register,
    placeOrder,
    getOrderById,
    Total,
    currency,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
