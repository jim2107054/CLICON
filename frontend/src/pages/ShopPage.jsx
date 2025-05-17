import React from "react";

const ShopPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-5 lg:px-36 py-5">
        {/*------------Left Div---------------*/}
        <div className="hidden md:block w-full lg:w-1/4 bg-gray-100 p-5">
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
            <hr className="border-b-2 h-1 bg-yellow-300 m-0 my-5" />
          </div>
          {/*-----------Left Div Price Range------ */}
          <div>
            <p className="font-medium my-2">PRICE RANGE</p>
            <div className="flex gap-3 my-2">
              <input
                className="h-5 w-1/2 text-gray-700 rounded border border-gray-800 px-5 py-4"
                type="number"
                placeholder="Min price"
              />
              <input
                className="h-5 w-1/2 text-gray-700 rounded border border-gray-800 px-5 py-4"
                type="number"
                placeholder="Max price"
              />
            </div>
            <div>
              <ul className="">
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $0 - $100
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $100 - $200
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $200 - $300
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $300 - $400
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $400 - $500
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $500 - $600
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $600 - $700
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $700 - $800
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $800 - $900
                </li>
                <li className="flex gap-2">
                  <input type="checkbox" />
                  $900 - $1000
                </li>
              </ul>
              <hr className="border h-1 border-b-2 bg-yellow-300 m-0 my-5" />
            </div>
          </div>
          {/*-----------Left Div Popular Brands------ */}
          <div>
            <p className="font-medium my-2">POPULAR BRANDS</p>
            <div className="flex flex-wrap">
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Apple</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Google</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Microsoft</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Samsung</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Dell</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>HP</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Symphony</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Xiaomi</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Sony</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Panasonic</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>LG</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>Intel</span>
              </p>
              <p className="flex w-1/2 gap-2 items-center text-center">
                <input className="ShopPage-CheckBox" type="checkbox" />
                <span>One Plus</span>
              </p>
            </div>
          </div>
          <hr className="border h-1 border-b-2 bg-yellow-300 m-0 my-5" />
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
        </div>
        {/*------------Right Div---------------*/}
        <div></div>
      </div>
    </div>
  );
};

export default ShopPage;
