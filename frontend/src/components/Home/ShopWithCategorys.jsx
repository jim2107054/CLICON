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
    <div>
      <div className="flex flex-col gap-5 my-3 md:my-8">
        {/*----------------Shop with categorys-------------*/}
        <div>
          <p className="text-2xl font-medium text-center">
            Shop with Categorys
          </p>
        </div>
        {/*----------------Items Types-------------*/}
        <div className="flex py-5 relative items-center">
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
            className={`text-3xl absolute text-white ${
              clickedPage === 0 ? "bg-gray-200" : "bg-btnColor"
            } rounded-full left-0`}
            disabled={clickedPage === 0}
          >
            <IoArrowBackOutline />{" "}
          </button>
          <div className="flex px-5 gap-5 overflow-x-scroll scroll-smooth hide-scrollbar">
            {categoryItems.length > 0 &&
              categoryItems
                .slice(currentIndex, totalCategory + 1)
                .map((item, index) => (
                  <Categories key={index} image={item.image} name={item.name} />
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
            className={`text-3xl absolute text-white ${
              clickedPage === smallImagePages + 1
                ? "bg-gray-200"
                : "bg-btnColor"
            } rounded-full right-0`}
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
