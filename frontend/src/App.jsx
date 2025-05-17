import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FirstNavbar from './components/navbars/FirstNavbar';
import SecondNavbar from './components/navbars/SecondNavbar';
import ThirdNavbar from './components/navbars/ThirdNavbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';
import FAQS from './pages/FAQS';
import AboutUs from './pages/AboutUs';
import CustomerSupport from './pages/CustomerSupport';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import ErrorPageNotFound from './pages/ErrorPageNotFound';
import ShopPage from './pages/ShopPage';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <div className=''>
      <FirstNavbar />
      <hr className="border-0 border-t border-green-700 m-0" />
      <SecondNavbar />
      <ThirdNavbar/>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/password' element={<ForgetPassword/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/verify-email' element={<VerifyEmail/>} />
        <Route path='/faqs' element={<FAQS/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/customer-support' element={<CustomerSupport/>} />
        <Route path='/blogs' element={<BlogList/>} />
        <Route path='/blog-details' element={<BlogDetails/>} />
        {/* Add more routes as needed */}
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/shop/:productId' element={<ProductDetails/>} />
         {/* Catch-all route for unmatched paths */}
         <Route path='*' element={<ErrorPageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App