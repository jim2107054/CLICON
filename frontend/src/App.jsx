import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import FAQS from "./pages/FAQS";
import AboutUs from "./pages/AboutUs";
import CustomerSupport from "./pages/CustomerSupport";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import ErrorPageNotFound from "./pages/ErrorPageNotFound";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import TrackOrder from "./pages/TrackOrder";
import TrackOrderDetails from "./pages/TrackOrderDetails";
import ShopingCard from "./pages/ShopingCard";
import WishList from "./pages/WishList";
import CheckOut from "./pages/CheckOut";
import CheckOutSuccess from "./pages/CheckOutSuccess";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollComponents/ScrollToTop";
import { useState } from "react";
import Header from "./pages/Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

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

  return (
    <div className="">
      <Header className='z-50 top-0 left-0 right-0'
        cart={cart}
        Total={Total}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/track-order-details" element={<TrackOrderDetails />} />
        <Route path="/shoping-card" element={<ShopingCard />} />
        <Route
          path="/wish-list"
          element={
            <WishList
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
              Total={Total}
            />
          }
        />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/check-out-success" element={<CheckOutSuccess />} />
        {/* Add more routes as needed */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
