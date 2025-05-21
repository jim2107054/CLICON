import HeroSection from "../components/Home/HeroSection";
import LatestNews from "../components/Home/LatestNews";
import ShowRelatedProducts from "../components/ShowRelatedProducts";
import Subscribtion from "../components/Subscribtion";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 lg:px-36 py-10">
        {/*-----------------Home page Hero section-------------*/}
        <HeroSection />
        {/*------------------Best Deals-------------------*/}
        {/*----------------Shop with categorys-------------*/}
        {/*----------------Featured Products-------------*/}
        {/*----------------Shop Now two items-------------*/}
        {/*----------------Computer Accessories-------------*/}
        {/*----------------Mackbook Pro-------------*/}
      </div>
      {/*----------------Flash sale, Best sellers and so on-------------*/}
      <ShowRelatedProducts />
      {/*----------------Latest News-------------*/}
      <div className="bg-gray-200">
        <div className="flex flex-col gap-10 px-5 lg:px-36 py-10">
          <LatestNews/>
        </div>
      </div>
      {/*----------------Subscribe to our newsletter-------------*/}
      <Subscribtion />
    </div>
  );
};

export default HomePage;
