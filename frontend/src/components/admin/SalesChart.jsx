import { useState, useEffect } from 'react';
import { analyticsService } from '../../services/adminService';

const SalesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRevenueData();
  }, []);

  const fetchRevenueData = async () => {
    try {
      setLoading(true);
      const revenueData = await analyticsService.getRevenueData();
      setData(revenueData || []);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const maxRevenue = data.length > 0 ? Math.max(...data.map(d => d.revenue || 0)) : 0;

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
            <p className="text-sm text-gray-600 mt-1">Monthly sales performance</p>
          </div>
        </div>
        <div className="text-center py-8 text-gray-500">
          No revenue data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
          <p className="text-sm text-gray-600 mt-1">Last 6 months revenue</p>
        </div>
        <button
          onClick={fetchRevenueData}
          className="px-3 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Refresh
        </button>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const heightPercentage = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 0;
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600 font-medium">{item.month}</div>
              <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-end px-3 transition-all duration-500"
                  style={{ width: `${heightPercentage}%`, minWidth: heightPercentage > 0 ? '80px' : '0' }}
                >
                  <span className="text-white text-xs font-medium">${item.revenue?.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 w-16 text-right">{item.orders} orders</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesChart;
