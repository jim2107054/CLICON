import { Outlet } from 'react-router-dom';
import Header from '../pages/user/Header';
import Footer from '../components/user/Footer';
import ScrollToTop from '../components/user/ScrollComponents/ScrollToTop';
import ScrollToTopButton from '../components/user/ScrollComponents/ScrollToTopButton';

const UserLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
