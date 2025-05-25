import React, { useState } from "react";
import { assets } from "./../assets/assets";
import ItemCard from "../components/ItemCard";
import shopItems from "../assets/ShopItem";
import {FaArrowRight } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";

const ShopPage = () => {
  const perPageItems = 12;
  const totalNumberOfPages = Math.ceil(shopItems.length / perPageItems);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className="flex flex-col gap-10 md:flex-row px-1 md:px-5 lg:px-36 py-5">
        {/*------------Left Div---------------*/}
        <div className="hidden md:block w-full md:w-2/4 lg:w-1/5 p-5">
          {/*-----------Left Div Category------ */}
          <div>
            <p className="font-medium my-2">CATEGORY</p>
            <ul className="">
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Electronics Devices
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Computer & Laptop
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Computer Accessories
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Smartphone
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Headphone
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Mobile Accessories
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Gaming Console
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Camera & Photo
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  TV & Homes Appliances
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Watchs & Accessories
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  GPS & Navigation
                </span>
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <input className="ShopPage-CheckBox size-3" type="checkbox" />
                <span className="hover:text-gray-900 hover:font-medium">
                  Warable Technology
                </span>
              </li>
            </ul>
            <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />
          </div>
          {/*-----------Left Div Price Range------ */}
          <div>
            <p className="font-medium my-2">PRICE RANGE</p>
            <div className="flex gap-2 my-2">
              <input
                className="h-5 w-1/2 text-gray-700 rounded border border-gray-800 px-2 py-4"
                type="number"
                placeholder="Min price"
              />
              <input
                className="h-5 w-1/2 text-gray-700 rounded border border-gray-800 px-2 py-4"
                type="number"
                placeholder="Max price"
              />
            </div>
            <div>
              <ul className="">
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $0 - $100
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $100 - $200
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $200 - $300
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $300 - $400
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $400 - $500
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $500 - $600
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $600 - $700
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $700 - $800
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $800 - $900
                </li>
                <li className="flex gap-2">
                  <input className="cursor-pointer" type="checkbox" />
                  $900 - $1000
                </li>
              </ul>
              <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />
            </div>
          </div>
          {/*-----------Left Div Popular Brands------ */}
          <div>
            <p className="font-medium my-2">POPULAR BRANDS</p>
            <div className="flex flex-wrap">
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Apple</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Google</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Microsoft</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Samsung</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Dell</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>HP</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Symphony</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Xiaomi</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Sony</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Panasonic</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>LG</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Intel</span>
              </p>
              <p className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>One Plus</span>
              </p>
            </div>
          </div>
          <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />
          {/*-----------Left Div Popular Tag------ */}
          <div>
            <p className="font-medium my-2">POPULAR TAGS</p>
            <div className="flex flex-wrap gap-2">
              <span className="shopPage-PopularTag">Game</span>
              <span className="shopPage-PopularTag">iPhone</span>
              <span className="shopPage-PopularTag">TV</span>
              <span className="shopPage-PopularTag">Asus Laptops</span>
              <span className="shopPage-PopularTag">Macbook</span>
              <span className="shopPage-PopularTag">SSD</span>
              <span className="shopPage-PopularTag">Graphics Card</span>
              <span className="shopPage-PopularTag">Power Bank</span>
              <span className="shopPage-PopularTag">Smart TV</span>
              <span className="shopPage-PopularTag">Speaker</span>
              <span className="shopPage-PopularTag">Tablet</span>
              <span className="shopPage-PopularTag">Microwave</span>
              <span className="shopPage-PopularTag">Samsung</span>
            </div>
          </div>
          {/*-----------Left Div Last Part------ */}
          <div className="my-5 border-2 items-center justify-center border-orange-300 rounded">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-col items-center justify-center">
                <img src={assets.shopPage} alt="" />
                <div className="flex gap-2 mt-2 mb-1 items-center justify-center">
                  <img
                    className="h-8 w-8"
                    src={assets.appleBlack}
                    alt="apple watch"
                  />
                  <p className="text-2xl font-medium">WATCH</p>
                </div>
                <p className="text-xs text-center font-bold text-red-500">
                  SERIES 7
                </p>
              </div>
              {/*----last part---*/}
              <div>
                <p className="text-[18px] text-center font-medium">
                  Heavy on Features. Light on Price.
                </p>
                <p className="text-xs text-center my-3">
                  Only for:{" "}
                  <span className="border-2 px-1 py-0.5 rounded bg-yellow-400 text-lg font-medium">
                    $299 USD
                  </span>
                </p>
                <div className="flex flex-col gap-2">
                  <button className="flex justify-center items-center gap-2 bg-btnColor px-5 py-2 text-sm text-white font-medium rounded-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <GrCart />
                    ADD TO CART
                  </button>
                  <button className="flex justify-center items-center gap-2 bg-white px-5 py-2 text-sm text-btnColor border border-btnColor font-medium rounded-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    VIEW DETAILS
                    <FaArrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------Right Div---------------*/}
        <div className="w-full lg:w-3/4 px-3 py-5 items-center justify-center">
          {/*-----------Right Div Top------ */}
          <div className="w-full mb-9 flex flex-col items-center justify-between md:flex-row gap-5">
            <div className="flex relative w-full lg:w-1/2 group items-center">
              <input
                className="border w-full px-5 py-1 rounded-md h-10 border-black"
                type="text"
                placeholder="Search for anything....."
              />
              <img
                className="h-5 absolute right-2 "
                src={assets.search}
                alt="searchIcon"
              />
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl font-light">Sort by:</p>
              <select className="border h-10 border-gray-200 rounded px-2 py-1">
                <option value="default">Default</option>
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
          {/*---------------Right Div Bottom-------------- */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-5 gap-y-8">
            {shopItems
              .slice((currentPage - 1)*perPageItems, perPageItems*(currentPage-1) + perPageItems)
              .map((item, index) => (
                <ItemCard
                  key={index}
                  id={item.id}
                  image={item.image}
                  rating={item.rating}
                  sell={item.sell}
                  title={item.title}
                  price={item.price}
                  offer={item.offer}
                />
              ))}
          </div>
          <div className="flex justify-center items-center my-16">
            <div className="flex gap-5 justify-center items-center py-5">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`text-4xl text-btnColor ${
                  currentPage === 1 ? "text-gray-500" : ""
                }`}
              >
                <BsArrowLeftSquare />
              </button>
              {Array.from({ length: totalNumberOfPages }, (_, index) => (
                <button
                  key={index}
                  className={`text-2xl rounded-md border border-btnColor h-10 w-10 items-center justify-center text-btnColor ${
                    currentPage === index + 1
                      ? "font-bold bg-btnColor text-white"
                      : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalNumberOfPages}
                className={`text-4xl text-btnColor ${
                  currentPage === totalNumberOfPages ? "text-gray-500" : ""
                }`}
              >
                <BsArrowRightSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
