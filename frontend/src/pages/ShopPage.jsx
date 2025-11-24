import React, { useState, useEffect } from "react";
import { assets } from "./../assets/assets";
import ItemCard from "../components/ItemCard";
import shopItems from "../assets/ShopItem";
import { FaArrowRight } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { CATEGORIES, BRANDS, SORT_OPTIONS } from "../constants/categories";

const ShopPage = () => {
  const { cart, addToCart, addToWishList, wishList, addToCompare, searchQuery } = useAppContext();
  
  // Calculate min and max prices from products
  const minProductPrice = Math.floor(Math.min(...shopItems.map(item => item.price)));
  const maxProductPrice = Math.ceil(Math.max(...shopItems.map(item => item.price)));
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([minProductPrice, maxProductPrice]);
  const [sortOption, setSortOption] = useState("default");
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 12;

  // Apply search query from context
  useEffect(() => {
    if (searchQuery) {
      setLocalSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  // Filter products
  const getFilteredProducts = () => {
    let filtered = [...shopItems];

    // Search filter
    const query = localSearchQuery.toLowerCase();
    if (query) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sorting
    switch (sortOption) {
      case "latest":
        filtered = [...filtered].reverse();
        break;
      case "popular":
        filtered = [...filtered].sort((a, b) => (b.sell || 0) - (a.sell || 0));
        break;
      case "lowToHigh":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const totalNumberOfPages = Math.ceil(filteredProducts.length / perPageItems);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedBrands, priceRange, localSearchQuery, sortOption]);

  // Handle category checkbox
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle brand checkbox
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([minProductPrice, maxProductPrice]);
    setLocalSearchQuery("");
    setSortOption("default");
  };
  return (
    <div>
      <div className="flex flex-col gap-10 md:flex-row px-1 md:px-5 lg:px-36 py-5">
        {/*------------Left Div - Filters ---------------*/}
        <div className="hidden md:block w-full md:w-2/4 lg:w-1/5 p-5">
          {/* Clear Filters Button */}
          <div className="mb-4">
            <button
              onClick={clearAllFilters}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all"
            >
              Clear All Filters
            </button>
          </div>

          {/*-----------Category Filter------ */}
          <div>
            <p className="font-medium my-2">CATEGORY</p>
            <ul className="">
              {CATEGORIES.slice(1).map((category) => (
                <li key={category.id} className="flex gap-2 items-center cursor-pointer my-1">
                  <input
                    className="ShopPage-CheckBox size-3 cursor-pointer"
                    type="checkbox"
                    checked={selectedCategories.includes(category.value)}
                    onChange={() => handleCategoryChange(category.value)}
                  />
                  <span className="hover:text-gray-900 hover:font-medium">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
            <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />
          </div>

          {/*-----------Price Range with Slider------ */}
          <div>
            <p className="font-medium my-2">PRICE RANGE</p>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              
              {/* Min Price Slider */}
              <div className="mb-3">
                <label className="text-xs text-gray-600">Min: ${priceRange[0]}</label>
                <input
                  type="range"
                  min={minProductPrice}
                  max={maxProductPrice}
                  value={priceRange[0]}
                  onChange={(e) => {
                    const newMin = parseInt(e.target.value);
                    if (newMin <= priceRange[1]) {
                      setPriceRange([newMin, priceRange[1]]);
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-btnColor"
                />
              </div>
              
              {/* Max Price Slider */}
              <div className="mb-2">
                <label className="text-xs text-gray-600">Max: ${priceRange[1]}</label>
                <input
                  type="range"
                  min={minProductPrice}
                  max={maxProductPrice}
                  value={priceRange[1]}
                  onChange={(e) => {
                    const newMax = parseInt(e.target.value);
                    if (newMax >= priceRange[0]) {
                      setPriceRange([priceRange[0], newMax]);
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-btnColor"
                />
              </div>

              {/* Manual Input Fields */}
              <div className="flex gap-2 mt-3">
                <input
                  className="w-1/2 text-sm text-gray-700 rounded border border-gray-300 px-2 py-2"
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => {
                    const newMin = parseInt(e.target.value) || minProductPrice;
                    if (newMin <= priceRange[1] && newMin >= minProductPrice) {
                      setPriceRange([newMin, priceRange[1]]);
                    }
                  }}
                />
                <input
                  className="w-1/2 text-sm text-gray-700 rounded border border-gray-300 px-2 py-2"
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const newMax = parseInt(e.target.value) || maxProductPrice;
                    if (newMax >= priceRange[0] && newMax <= maxProductPrice) {
                      setPriceRange([priceRange[0], newMax]);
                    }
                  }}
                />
              </div>
            </div>
            <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />
          </div>

          {/*-----------Popular Brands------ */}
          <div>
            <p className="font-medium my-2">POPULAR BRANDS</p>
            <div className="flex flex-wrap">
              {BRANDS.map((brand) => (
                <p key={brand} className="flex w-1/2 gap-2 cursor-pointer hover:font-medium items-center text-center my-0.5">
                  <input
                    className="ShopPage-CheckBox cursor-pointer"
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <span>{brand}</span>
                </p>
              ))}
            </div>
          </div>
          <hr className="border h-0.5 border-b bg-gray-300 m-0 my-5" />

          {/*-----------Featured Product Card------ */}
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

        {/*------------Right Div - Products Area ---------------*/}
        <div className="w-full lg:w-3/4 px-3 py-5 items-center justify-center">
          {/*-----------Search and Sort------ */}
          <div className="w-full mb-9 flex flex-col items-center justify-between md:flex-row gap-5">
            <div className="flex relative w-full lg:w-1/2 group items-center">
              <input
                className="border w-full px-5 py-1 rounded-md h-10 border-black"
                type="text"
                placeholder="Search for anything....."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
              />
              <div className="h-5 absolute right-2 cursor-pointer">
                <img
                  className="h-5"
                  src={assets.search}
                  alt="searchIcon"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-xl font-light">Sort by:</p>
              <select 
                className="border h-10 border-gray-200 rounded px-2 py-1"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                {SORT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategories.length > 0 || selectedBrands.length > 0 || 
            priceRange[0] !== minProductPrice || priceRange[1] !== maxProductPrice) && (
            <div className="mb-5 p-3 bg-gray-100 rounded">
              <p className="font-medium mb-2">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center gap-2">
                    {CATEGORIES.find(c => c.value === cat)?.name}
                    <button onClick={() => handleCategoryChange(cat)} className="hover:text-red-200">×</button>
                  </span>
                ))}
                {selectedBrands.map(brand => (
                  <span key={brand} className="px-3 py-1 bg-green-500 text-white rounded-full text-sm flex items-center gap-2">
                    {brand}
                    <button onClick={() => handleBrandChange(brand)} className="hover:text-red-200">×</button>
                  </span>
                ))}
                {(priceRange[0] !== minProductPrice || priceRange[1] !== maxProductPrice) && (
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-600">
              Showing {filteredProducts.length > 0 ? ((currentPage - 1) * perPageItems + 1) : 0} - {Math.min(currentPage * perPageItems, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          {/*---------------Products Grid-------------- */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-5 gap-y-8">
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(
                  (currentPage - 1) * perPageItems,
                  perPageItems * currentPage
                )
                .map((item, index) => (
                  <ItemCard
                    key={item.id || index}
                    cart={cart}
                    addToCart={addToCart}
                    product={item}
                    addToWishList={addToWishList}
                    wishList={wishList}
                    addToCompare={addToCompare}
                  />
                ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-2xl font-semibold text-gray-600">No products found</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > perPageItems && (
            <div className="flex justify-center items-center my-16">
              <div className="flex gap-5 justify-center items-center py-5">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`text-4xl ${
                    currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-btnColor hover:text-blue-600"
                  }`}
                >
                  <BsArrowLeftSquare />
                </button>
                {Array.from({ length: totalNumberOfPages }, (_, index) => (
                  <button
                    key={index}
                    className={`text-2xl rounded-md border border-btnColor h-10 w-10 items-center justify-center transition-all ${
                      currentPage === index + 1
                        ? "font-bold bg-btnColor text-white"
                        : "text-btnColor hover:bg-gray-100"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalNumberOfPages}
                  className={`text-4xl ${
                    currentPage === totalNumberOfPages ? "text-gray-300 cursor-not-allowed" : "text-btnColor hover:text-blue-600"
                  }`}
                >
                  <BsArrowRightSquare />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
