import React from 'react';
import { FaCheckCircle, FaBoxOpen, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { MdCategory, MdBrandingWatermark } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';

const ProductAdditionalInfo = ({ product }) => {
  // This structure is ready for backend integration
  // Simply fetch these fields from your database and pass them in the product object
  const details = {
    sku: product.sku || product.id || 'A' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    brand: product.brand || ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Canon', 'Nikon'][product.id % 8],
    model: product.model || `${product.title?.split(' ')[0]}-${product.id}${String.fromCharCode(65 + (product.id % 26))}`,
    weight: product.weight || `${(1.5 + (product.id % 5) * 0.5).toFixed(1)} kg`,
    dimensions: product.dimensions || `${30 + (product.id % 10)} x ${20 + (product.id % 8)} x ${3 + (product.id % 5)} cm`,
    color: product.color || ['Black', 'Silver', 'White', 'Blue', 'Red', 'Gold'][product.id % 6],
    material: product.material || (product.category?.includes('electron') ? 'Aluminum & Tempered Glass' : 'Premium ABS Plastic'),
    warranty: product.warranty || `${product.id % 2 === 0 ? '2' : '1'} Year Manufacturer Warranty`,
    origin: product.origin || ['USA', 'China', 'Japan', 'South Korea', 'Germany'][product.id % 5],
    releaseDate: product.releaseDate || `${2022 + (product.id % 3)}`,
    // Backend can add: inBox, compatibility, certifications, etc.
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Info Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <MdCategory className="text-btnColor" />
            Product Information
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">SKU:</span>
              <span className="text-gray-600 font-medium">{details.sku}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700 flex items-center gap-2">
                <MdBrandingWatermark className="text-blueButton" />
                Brand:
              </span>
              <span className="text-gray-600 font-medium">{details.brand}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Model:</span>
              <span className="text-gray-600 font-medium">{details.model}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Color:</span>
              <span className="text-gray-600 font-medium">{details.color}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700 flex items-center gap-2">
                <BsCalendar3 className="text-green-600" />
                Release Year:
              </span>
              <span className="text-gray-600 font-medium">{details.releaseDate}</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <FaBoxOpen className="text-btnColor" />
            Physical Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Weight:</span>
              <span className="text-gray-600 font-medium">{details.weight}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Dimensions:</span>
              <span className="text-gray-600 font-medium">{details.dimensions}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Material:</span>
              <span className="text-gray-600 font-medium">{details.material}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700">Origin:</span>
              <span className="text-gray-600 font-medium">{details.origin}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-700 flex items-center gap-2">
                <FaShieldAlt className="text-green-600" />
                Warranty:
              </span>
              <span className="text-gray-600 font-medium">{details.warranty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-btnColor to-orange-500 p-6 rounded-xl shadow-lg text-white mb-8">
        <h3 className="text-2xl font-bold mb-4">What's Included</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Backend: product.packageIncludes array */}
          {(product.packageIncludes || [
            'Original Product with all accessories',
            'User Manual & Installation Guide',
            'Warranty Card & Invoice',
            'Premium Packaging'
          ]).map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Return Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border-2 border-blueButton">
          <div className="flex items-center gap-3 mb-4">
            <FaTruck className="text-3xl text-blueButton" />
            <h4 className="text-xl font-bold text-gray-800">Shipping Information</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blueButton mt-1">•</span>
              <span>Free shipping on orders over $100</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blueButton mt-1">•</span>
              <span>Standard delivery: 3-5 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blueButton mt-1">•</span>
              <span>Express delivery available at checkout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blueButton mt-1">•</span>
              <span>Track your order in real-time</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border-2 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-3xl text-green-600" />
            <h4 className="text-xl font-bold text-gray-800">Return Policy</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>30-day hassle-free return policy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>100% money-back guarantee</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Free return shipping for defective items</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Quick refund processing (5-7 days)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;