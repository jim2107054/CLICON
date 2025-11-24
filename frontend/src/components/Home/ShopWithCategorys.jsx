import { useState } from "react";
import Categories from "./Categories";
import { categoryItems } from "../../assets/categoryItems";

const ShopWithCategorys = () => {
  return (
    <div className="my-8 md:my-12 px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Shop by Category
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Browse through your favorite categories. We've got them all!
        </p>
      </div>

      {/* Categories Grid - Professional E-commerce Style */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categoryItems.length > 0 &&
          categoryItems.map((item) => (
            <Categories 
              key={item.id} 
              image={item.image} 
              name={item.name} 
              category={item.category} 
            />
          ))}
      </div>
    </div>
  );
};

export default ShopWithCategorys;
