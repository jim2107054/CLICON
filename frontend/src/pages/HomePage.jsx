import BestDeals from "../components/Home/BestDeals";
import ComputerAccessories from "../components/Home/ComputerAccessories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import HeroSection from "../components/Home/HeroSection";
import LatestNews from "../components/Home/LatestNews";
import MackBookPro from "../components/Home/MackBookPro";
import ShopTwoItems from "../components/Home/ShopTwoItems";
import ShopWithCategorys from "../components/Home/ShopWithCategorys";
import ShowRelatedProducts from "../components/ShowRelatedProducts";
import Subscribtion from "../components/Subscribtion";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col w-full gap-10 px-2 md:px-5 lg:px-36 py-10">
        {/*-----------------Home page Hero section-------------*/}
        <HeroSection />
        {/*------------------Best Deals-------------------*/}
        <BestDeals/>
        {/*----------------Shop with categorys-------------*/}
        <ShopWithCategorys/>
        {/*----------------Featured Products-------------*/}
        <FeaturedProducts/>
        {/*----------------Shop Now two items-------------*/}
        <ShopTwoItems/>
        {/*----------------Computer Accessories-------------*/}
        <ComputerAccessories/>
        {/*----------------Mackbook Pro-------------*/}
        <MackBookPro/>
      </div>
      {/*----------------Flash sale, Best sellers and so on-------------*/}
      <ShowRelatedProducts />
      {/*----------------Latest News-------------*/}
      <div className="bg-gray-200">
        <div className="flex flex-col items-center md:items-start gap-10 md:px-5 lg:px-36 py-10">
          <LatestNews/>
        </div>
      </div>
      {/*----------------Subscribe to our newsletter-------------*/}
      <Subscribtion />
    </div>
  );
};

export default HomePage;
