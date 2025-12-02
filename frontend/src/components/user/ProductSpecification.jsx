import React from 'react';
import { 
  FaMicrochip, 
  FaMemory, 
  FaHdd, 
  FaDesktop, 
  FaBatteryFull, 
  FaWifi,
  FaCamera,
  FaMobile
} from 'react-icons/fa';
import { MdScreenshot, MdSpeed } from 'react-icons/md';
import { BsCpu, BsDisplay } from 'react-icons/bs';

const ProductSpecification = ({ product }) => {
  // Ready for backend: product.specifications array from database
  // Each spec: { icon: 'cpu', label: 'Processor', value: 'Intel i7' }
  const getSpecifications = () => {
    // If backend provides specifications, use them
    if (product.specifications && product.specifications.length > 0) {
      return product.specifications;
    }
    
    // Otherwise, generate based on product type for demo
    const title = product.title?.toLowerCase() || '';
    
    // Detect product type
    const isLaptop = title.includes('laptop') || title.includes('macbook') || title.includes('notebook');
    const isPhone = title.includes('phone') || title.includes('mobile') || title.includes('iphone') || title.includes('samsung');
    const isCamera = title.includes('camera');
    const isTV = title.includes('tv') || title.includes('television');
    const isHeadphone = title.includes('headphone') || title.includes('earphone') || title.includes('airpods');
    
    if (isLaptop) {
      const laptopSpecs = [
        'Intel Core i7-12700H', 'AMD Ryzen 9 5900HS', 'M1 Pro Chip', 'Intel Core i5-1240P'
      ];
      const ramOptions = ['8GB DDR4', '16GB DDR4', '16GB Unified Memory', '32GB DDR5'];
      const storageOptions = ['256GB SSD', '512GB SSD NVMe', '1TB SSD', '512GB PCIe'];
      
      return [
        { icon: <BsCpu />, label: 'Processor', value: laptopSpecs[product.id % laptopSpecs.length] },
        { icon: <FaMemory />, label: 'RAM', value: ramOptions[product.id % ramOptions.length] },
        { icon: <FaHdd />, label: 'Storage', value: storageOptions[product.id % storageOptions.length] },
        { icon: <BsDisplay />, label: 'Display', value: `${13 + (product.id % 4)}" ${product.id % 2 ? 'Retina' : 'Full HD'}, ${1920 + (product.id % 2 * 640)}x${1080 + (product.id % 2 * 520)}` },
        { icon: <FaMicrochip />, label: 'Graphics', value: product.id % 2 ? 'Integrated Intel Iris Xe' : 'NVIDIA RTX 3050' },
        { icon: <FaBatteryFull />, label: 'Battery', value: `Up to ${12 + (product.id % 8)} hours usage` },
        { icon: <FaWifi />, label: 'Connectivity', value: `Wi-Fi ${5 + (product.id % 2)}, Bluetooth 5.${product.id % 3}` },
        { icon: <MdSpeed />, label: 'Operating System', value: product.id % 2 ? 'Windows 11 Pro' : 'macOS Ventura' },
      ];
    } else if (isPhone) {
      const processors = ['Snapdragon 8 Gen 2', 'A16 Bionic', 'Snapdragon 8+ Gen 1', 'Dimensity 9200', 'A15 Bionic'];
      const ramOptions = ['6GB', '8GB', '12GB', '16GB'];
      const storageOptions = ['128GB', '256GB', '512GB', '1TB'];
      
      return [
        { icon: <BsCpu />, label: 'Processor', value: processors[product.id % processors.length] },
        { icon: <FaMemory />, label: 'RAM', value: ramOptions[(product.id + 1) % ramOptions.length] },
        { icon: <FaHdd />, label: 'Storage', value: storageOptions[product.id % storageOptions.length] },
        { icon: <MdScreenshot />, label: 'Display', value: `${6.1 + (product.id % 8) * 0.1}" ${product.id % 2 ? 'AMOLED' : 'OLED'}, ${90 + (product.id % 2 * 30)}Hz` },
        { icon: <FaCamera />, label: 'Camera', value: `${48 + (product.id % 3) * 16}MP Main + ${12 + (product.id % 2) * 4}MP Ultra Wide` },
        { icon: <FaBatteryFull />, label: 'Battery', value: `${4000 + (product.id % 10) * 100}mAh, ${25 + (product.id % 4) * 10}W Fast Charging` },
        { icon: <FaWifi />, label: 'Connectivity', value: `${product.id % 2 ? '5G' : '4G LTE'}, Wi-Fi ${5 + (product.id % 2)}, Bluetooth 5.${1 + (product.id % 3)}` },
        { icon: <FaMobile />, label: 'OS', value: product.id % 2 ? `Android ${13 + (product.id % 2)}` : `iOS ${16 + (product.id % 2)}` },
      ];
    } else if (isCamera) {
      const megapixels = [20, 24, 32, 45, 50];
      const processors = ['DIGIC 8', 'EXPEED 6', 'BIONZ X', 'TruePic IX'];
      
      return [
        { icon: <FaCamera />, label: 'Sensor', value: `${megapixels[product.id % megapixels.length]}MP ${product.id % 2 ? 'Full-Frame' : 'APS-C'} CMOS Sensor` },
        { icon: <MdScreenshot />, label: 'Display', value: `${2.8 + (product.id % 3) * 0.2}" ${product.id % 2 ? 'Touchscreen' : 'Tilting'} LCD` },
        { icon: <BsCpu />, label: 'Processor', value: `${processors[product.id % processors.length]} Image Processor` },
        { icon: <FaHdd />, label: 'Video', value: `${product.id % 2 ? '4K' : '6K'} UHD at ${product.id % 2 ? '30' : '60'}fps` },
        { icon: <FaWifi />, label: 'Connectivity', value: `Wi-Fi ${5 + (product.id % 2)}, Bluetooth, ${product.id % 2 ? 'NFC' : 'USB-C'}` },
        { icon: <FaBatteryFull />, label: 'Battery', value: `${500 + (product.id % 5) * 100}+ shots per charge` },
        { icon: <MdSpeed />, label: 'ISO Range', value: `100-${12800 * (1 + product.id % 3)}` },
        { icon: <FaMicrochip />, label: 'Storage', value: product.id % 2 ? 'Dual SD Card Slots' : 'SD/SDXC Card Slot' },
      ];
    } else if (isTV) {
      const screenSizes = ['43"', '50"', '55"', '65"', '75"'];
      const resolutions = ['4K UHD (3840 x 2160)', '8K UHD (7680 x 4320)', 'Full HD (1920 x 1080)'];
      
      return [
        { icon: <BsDisplay />, label: 'Screen Size', value: screenSizes[product.id % screenSizes.length] },
        { icon: <MdScreenshot />, label: 'Resolution', value: resolutions[product.id % resolutions.length] },
        { icon: <FaMicrochip />, label: 'Display Type', value: product.id % 2 ? 'QLED Panel' : 'OLED Panel' },
        { icon: <BsCpu />, label: 'Processor', value: product.id % 2 ? 'Quantum Processor 4K' : 'Neural Quantum Processor' },
        { icon: <MdSpeed />, label: 'Refresh Rate', value: `${60 + (product.id % 2 * 60)}Hz` },
        { icon: <FaWifi />, label: 'Smart Features', value: `Built-in Wi-Fi ${5 + (product.id % 2)}, ${product.id % 2 ? 'Tizen' : 'webOS'} Smart TV` },
        { icon: <FaHdd />, label: 'Ports', value: `${3 + (product.id % 2)}x HDMI 2.1, 2x USB, Ethernet` },
        { icon: <FaDesktop />, label: 'Audio', value: `Dolby Atmos, ${30 + (product.id % 3 * 10)}W Speakers` },
      ];
    } else if (isHeadphone) {
      const driverSizes = ['35mm', '40mm', '45mm', '50mm'];
      const batteries = ['20', '25', '30', '35', '40'];
      
      return [
        { icon: <FaMicrochip />, label: 'Driver Size', value: `${driverSizes[product.id % driverSizes.length]} Dynamic Drivers` },
        { icon: <FaBatteryFull />, label: 'Battery Life', value: `Up to ${batteries[product.id % batteries.length]} hours` },
        { icon: <FaWifi />, label: 'Connectivity', value: `Bluetooth 5.${1 + (product.id % 3)}, USB-C` },
        { icon: <MdSpeed />, label: 'Noise Cancellation', value: product.id % 2 ? 'Active ANC Technology' : 'Hybrid ANC' },
        { icon: <FaMemory />, label: 'Frequency Response', value: `${10 + (product.id % 2) * 10}Hz - 20kHz` },
        { icon: <FaDesktop />, label: 'Audio Codec', value: product.id % 2 ? 'AAC, SBC, aptX HD' : 'LDAC, AAC, aptX Adaptive' },
        { icon: <BsCpu />, label: 'Microphone', value: product.id % 2 ? 'Dual Beamforming Mic' : 'Triple Mic Array' },
        { icon: <FaHdd />, label: 'Weight', value: `${220 + (product.id % 5) * 10}g (Lightweight Design)` },
      ];
    } else {
      // Generic electronics specifications with variation
      const processors = ['High-Performance Chip', 'Advanced Processor', 'Latest Generation CPU', 'Premium Chipset'];
      const memories = ['8GB', '16GB', '32GB', '64GB'];
      
      return [
        { icon: <BsCpu />, label: 'Processor', value: processors[product.id % processors.length] },
        { icon: <FaMemory />, label: 'Memory', value: memories[(product.id + 1) % memories.length] },
        { icon: <FaHdd />, label: 'Storage', value: `${128 * (1 + product.id % 4)}GB ${product.id % 2 ? 'SSD' : 'Flash'}` },
        { icon: <BsDisplay />, label: 'Display', value: product.id % 3 === 0 ? '4K Ultra HD' : product.id % 3 === 1 ? 'Full HD 1080p' : 'HD Ready' },
        { icon: <FaBatteryFull />, label: 'Battery', value: `${3000 + (product.id % 10) * 200}mAh Long-lasting` },
        { icon: <FaWifi />, label: 'Connectivity', value: `Wi-Fi ${5 + (product.id % 2)}, Bluetooth 5.${product.id % 3}` },
        { icon: <FaMicrochip />, label: 'Technology', value: product.id % 2 ? 'Latest Generation' : 'Next-Gen Tech' },
        { icon: <MdSpeed />, label: 'Performance', value: product.id % 2 ? 'Premium Quality' : 'Professional Grade' },
      ];
    }
  };

  const specifications = getSpecifications();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-btnColor to-orange-500 p-6 rounded-xl mb-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Technical Specifications</h2>
        <p className="text-orange-100">Detailed technical information about this product</p>
      </div>

      {/* Specifications Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {specifications.map((spec, index) => (
          <div 
            key={index}
            className="bg-white p-5 rounded-xl shadow-md border-l-4 border-btnColor hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl text-btnColor mt-1">
                {spec.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1 text-lg">{spec.label}</h4>
                <p className="text-gray-600 leading-relaxed">{spec.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blueButton shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <FaMicrochip className="text-blueButton" />
          Key Features & Highlights
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">Premium build quality with attention to detail</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">Energy efficient and eco-friendly design</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">Advanced cooling system for optimal performance</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">User-friendly interface and easy setup</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">Compatible with multiple accessories</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blueButton text-xl mt-1">✓</span>
            <p className="text-gray-700">Regular software updates and support</p>
          </div>
        </div>
      </div>

      {/* Environmental Info */}
      <div className="mt-6 bg-green-50 p-5 rounded-xl border border-green-200">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-green-600">🌱</span>
          Environmental Commitment
        </h4>
        <p className="text-gray-700 text-sm">
          This product meets international environmental standards and uses recyclable materials wherever possible. 
          Energy Star certified for reduced power consumption.
        </p>
      </div>
    </div>
  );
};

export default ProductSpecification;