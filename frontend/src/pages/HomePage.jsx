import HeroSection from "../components/Home/HeroSection";
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
        {/*----------------Latest News-------------*/}
      </div>
      {/*----------------Flash sale, Best sellers and so on-------------*/}
      <ShowRelatedProducts />

      {/*----------------Subscribe to our newsletter-------------*/}
      <Subscribtion />
    </div>
  );
};

export default HomePage;
