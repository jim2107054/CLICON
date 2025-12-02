import { FiDollarSign, FiShoppingCart, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Analytics = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 234, customers: 189 },
    { month: 'Feb', revenue: 52000, orders: 267, customers: 212 },
    { month: 'Mar', revenue: 48000, orders: 245, customers: 198 },
    { month: 'Apr', revenue: 61000, orders: 312, customers: 245 },
    { month: 'May', revenue: 58000, orders: 289, customers: 231 },
    { month: 'Jun', revenue: 72000, orders: 356, customers: 278 }
  ];

  const topCategories = [
    { name: 'Laptops', revenue: 125000, percentage: 35 },
    { name: 'Phones', revenue: 98000, percentage: 28 },
    { name: 'Tablets', revenue: 56000, percentage: 16 },
    { name: 'Accessories', revenue: 45000, percentage: 13 },
    { name: 'Others', revenue: 28000, percentage: 8 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
          <p className="text-gray-600 mt-1">Detailed insights and performance metrics</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 6 months</option>
            <option>Last 12 months</option>
            <option>This year</option>
            <option>Last year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <FiDollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+18.2%</span>
          </div>
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">$336,000</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <FiShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+12.5%</span>
          </div>
          <p className="text-sm text-gray-600">Total Orders</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">1,703</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <FiUsers className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+15.7%</span>
          </div>
          <p className="text-sm text-gray-600">New Customers</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">1,353</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8.4%</span>
          </div>
          <p className="text-sm text-gray-600">Avg Order Value</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">$197</p>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Revenue Trend</h2>
        <div className="space-y-4">
          {revenueData.map((data, index) => {
            const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
            const widthPercentage = (data.revenue / maxRevenue) * 100;
            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{data.month}</span>
                  <span className="text-sm font-semibold text-gray-900">${data.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${widthPercentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">{data.orders} orders</span>
                  <span className="text-xs text-gray-500">{data.customers} customers</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Top Categories by Revenue</h2>
        <div className="space-y-4">
          {topCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
                <span className="text-sm font-semibold text-gray-900">${category.revenue.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{category.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
