import { useState, useEffect } from 'react';
import { analyticsService } from '../../services/adminService';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopProducts();
  }, []);

  const fetchTopProducts = async () => {
    try {
      setLoading(true);
      const data = await analyticsService.getTopProducts(5);
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching top products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
            <p className="text-sm text-gray-600 mt-1">Best selling items</p>
          </div>
        </div>
        <div className="text-center py-8 text-gray-500">
          No products data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
          <p className="text-sm text-gray-600 mt-1">Best selling items</p>
        </div>
        <button
          onClick={fetchTopProducts}
          className="px-3 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Refresh
        </button>
      </div>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.sales || 0} sold</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">${(product.revenue || 0).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
