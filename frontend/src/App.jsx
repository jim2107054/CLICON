import { Route, Routes } from "react-router-dom";

// Layouts
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Pages
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import ForgetPassword from "./pages/user/ForgetPassword";
import ResetPassword from "./pages/user/ResetPassword";
import VerifyEmail from "./pages/user/VerifyEmail";
import FAQS from "./pages/user/FAQS";
import AboutUs from "./pages/user/AboutUs";
import CustomerSupport from "./pages/user/CustomerSupport";
import BlogList from "./pages/user/BlogList";
import BlogDetails from "./pages/user/BlogDetails";
import ErrorPageNotFound from "./pages/user/ErrorPageNotFound";
import ShopPage from "./pages/user/ShopPage";
import ProductDetails from "./pages/user/ProductDetails";
import TrackOrder from "./pages/user/TrackOrder";
import TrackOrderDetails from "./pages/user/TrackOrderDetails";
import ShopingCard from "./pages/user/ShopingCard";
import WishList from "./pages/user/WishList";
import CheckOut from "./pages/user/CheckOut";
import CheckOutSuccess from "./pages/user/CheckOutSuccess";
import HomePage from "./pages/user/HomePage";
import ComparePage from "./pages/user/ComparePage";
import NeedHelp from "./pages/user/NeedHelp";
import MyAccount from "./pages/user/MyAccount";
import Settings from "./pages/user/Settings";
import TermsOfService from "./pages/user/TermsPage";
import PrivacyPolicy from "./pages/user/PrivacyPage";

// Admin Pages
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
        <Route path="/admin" element={<AdminLayout />}>
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

        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="faqs" element={<FAQS />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="customer-support" element={<CustomerSupport />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="blog-details/:blogId" element={<BlogDetails />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="track-order-details" element={<TrackOrderDetails />} />
          <Route path="shoping-card" element={<ShopingCard />} />
          <Route path="wish-list" element={<WishList />} />
          <Route path="check-out" element={<CheckOut />} />
          <Route path="check-out-success" element={<CheckOutSuccess />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="need-help" element={<NeedHelp />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="settings" element={<Settings />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:productId" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
