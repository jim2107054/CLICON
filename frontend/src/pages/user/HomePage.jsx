import BestDeals from "../../components/user/Home/BestDeals";
import ComputerAccessories from "../../components/user/Home/ComputerAccessories";
import FeaturedProducts from "../../components/user/Home/FeaturedProducts";
import HeroSection from "../../components/user/Home/HeroSection";
import LatestNews from "../../components/user/Home/LatestNews";
import MackBookPro from "../../components/user/Home/MackBookPro";
import ShopTwoItems from "../../components/user/Home/ShopTwoItems";
import ShopWithCategorys from "../../components/user/Home/ShopWithCategorys";
import ShowRelatedProducts from "../../components/user/ShowRelatedProducts";
import Subscribtion from "../../components/user/Subscribtion";
import SEO from "../../components/user/SEO";
import { PAGE_SEO, getOrganizationSchema, getWebsiteSchema } from "../../config/seo.config";

const HomePage = () => {
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema()
  ];

  return (
    <div>
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        url={PAGE_SEO.home.path}
        structuredData={structuredData}
      />
      <div className="flex flex-col w-full gap-10 px-2 md:px-5 lg:px-36 py-10">
        {/*-----------------Home page Hero section-------------*/}
        <HeroSection />
        {/*------------------Best Deals-------------------*/}
        <BestDeals />
        {/*----------------Shop with categorys-------------*/}
        <ShopWithCategorys />
        {/*----------------Featured Products-------------*/}
        <FeaturedProducts />
        {/*----------------Shop Now two items-------------*/}
        <ShopTwoItems />
        {/*----------------Computer Accessories-------------*/}
        <ComputerAccessories />
        {/*----------------Mackbook Pro-------------*/}
        <MackBookPro />
      </div>
      {/*----------------Flash sale, Best sellers and so on-------------*/}
      <ShowRelatedProducts />
      {/*----------------Latest News-------------*/}
      <div className="bg-gray-200">
        <div className="flex flex-col items-center md:items-start gap-10 md:px-5 lg:px-36 py-10">
          <LatestNews />
        </div>
      </div>
      {/*----------------Subscribe to our newsletter-------------*/}
      <Subscribtion />
    </div>
  );
};

export default HomePage;
