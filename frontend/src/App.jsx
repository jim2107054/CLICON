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
import ScrollToTopButton from "./components/ScrollComponents/ScrollToTopButton";
import Header from "./pages/Header";
import ComparePage from "./pages/ComparePage";
import NeedHelp from "./pages/NeedHelp";
import MyAccount from "./pages/MyAccount";
import Settings from "./pages/Settings";
import TermsOfService from "./pages/TermsPage";
import PrivacyPolicy from "./pages/PrivacyPage";

// Admin imports
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/admin/Dashboard";
import ProductsList from "./pages/admin/ProductsList";
import AddProduct from "./pages/admin/AddProduct";
import OrdersList from "./pages/admin/OrdersList";
import CustomersList from "./pages/admin/CustomersList";
import Categories from "./pages/admin/Categories";
import Inventory from "./pages/admin/Inventory";
import Analytics from "./pages/admin/Analytics";
import AdminSettings from "./pages/admin/AdminSettings";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="customers" element={<CustomersList />} />
          <Route path="categories" element={<Categories />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Public Routes */}
        <Route path="/*" element={
          <>
            <Header />
            <ScrollToTop />
            <ScrollToTopButton />
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
              <Route path="/blog-details/:blogId" element={<BlogDetails />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/track-order-details" element={<TrackOrderDetails />} />
              <Route path="/shoping-card" element={<ShopingCard />} />
              <Route path="/wish-list" element={<WishList />} />
              <Route path="/check-out" element={<CheckOut />} />
              <Route path="/check-out-success" element={<CheckOutSuccess />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/need-help" element={<NeedHelp />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:productId" element={<ProductDetails />} />
              <Route path="*" element={<ErrorPageNotFound />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
