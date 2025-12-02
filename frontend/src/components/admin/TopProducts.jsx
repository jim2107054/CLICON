const TopProducts = () => {
  const products = [
    { name: 'MacBook Pro 16"', sales: 245, revenue: 612755, image: 'https://via.placeholder.com/48' },
    { name: 'iPhone 15 Pro', sales: 189, revenue: 226798, image: 'https://via.placeholder.com/48' },
    { name: 'AirPods Pro', sales: 412, revenue: 102975, image: 'https://via.placeholder.com/48' },
    { name: 'iPad Air', sales: 156, revenue: 93598, image: 'https://via.placeholder.com/48' },
    { name: 'Apple Watch', sales: 203, revenue: 81197, image: 'https://via.placeholder.com/48' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
          <p className="text-sm text-gray-600 mt-1">Best selling items</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.sales} sold</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">${product.revenue.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
