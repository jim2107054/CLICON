import { useState } from "react";
import Categories from "./Categories";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { assets } from "../../assets/assets";
import { categoryItems } from "../../assets/categoryItems";

const ShopWithCategorys = () => {
  const [productImage, setProductImage] = useState(assets.laptopDetails);
  const [clickedPage, setclickedPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCategory = categoryItems.length;
  const smallImagePages = Math.ceil(totalCategory / 5);
  return (
    <div className="my-8 md:my-12">
      <div className="flex flex-col gap-8">
        {/*----------------Shop with categorys-------------*/}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Browse through your favorite categories. We've got them all!
          </p>
          <div className="flex justify-center mt-3">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-btnColor to-transparent rounded-full"></div>
          </div>
        </div>
        {/*----------------Items Types-------------*/}
        <div className="flex py-8 relative items-center">
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              } else {
                setCurrentIndex(0);
              }
              setProductImage(categoryItems[currentIndex].image);
              setclickedPage(clickedPage - 1);
            }}
            className={`text-2xl md:text-3xl absolute z-20 p-2 md:p-3 rounded-full left-0 md:left-2 transition-all duration-300 shadow-lg ${
              clickedPage === 0 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-white text-btnColor hover:bg-btnColor hover:text-white hover:shadow-xl hover:scale-110"
            }`}
            disabled={clickedPage === 0}
          >
            <IoArrowBackOutline />
          </button>
          <div className="flex px-5 gap-5 overflow-x-scroll scroll-smooth hide-scrollbar">
            {categoryItems.length > 0 &&
              categoryItems
                .slice(currentIndex, totalCategory + 1)
                .map((item, index) => (
                  <Categories key={index} image={item.image} name={item.name} category={item.category} />
                ))}
          </div>
          <button
            onClick={() => {
              if (currentIndex < totalCategory - 1) {
                const newIndex = currentIndex + 1;
                setCurrentIndex(newIndex);
                setProductImage(categoryItems[newIndex].image);
                setclickedPage(clickedPage + 1);
              }
            }}
            className={`text-2xl md:text-3xl absolute z-20 p-2 md:p-3 rounded-full right-0 md:right-2 transition-all duration-300 shadow-lg ${
              clickedPage === smallImagePages + 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-btnColor hover:bg-btnColor hover:text-white hover:shadow-xl hover:scale-110"
            }`}
            disabled={clickedPage === smallImagePages + 1}
          >
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
      <style>
        {`
                .flex.px-5.gap-5.overflow-x-scroll.w-full::-webkit-scrollbar {
                    display: none;
                }
            `}
      </style>
    </div>
  );
};

export default ShopWithCategorys;
