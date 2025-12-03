import { useState, useEffect } from 'react';
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiShoppingCart, FiUsers, FiPackage } from 'react-icons/fi';
import StatCard from '../../components/admin/StatCard';
import RecentOrders from '../../components/admin/RecentOrders';
import SalesChart from '../../components/admin/SalesChart';
import TopProducts from '../../components/admin/TopProducts';
import { analyticsService } from '../../services/adminService';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const data = await analyticsService.getDashboardStats();
      
      // Map API data to stats format
      const mappedStats = [
        {
          title: 'Total Revenue',
          value: `$${parseFloat(data.totalRevenue || 0).toLocaleString()}`,
          change: data.revenueChange || '+0%',
          trend: data.revenueChange?.startsWith('-') ? 'down' : 'up',
          icon: FiDollarSign,
          bgColor: 'bg-blue-50',
          iconColor: 'text-blue-600',
          changeColor: data.revenueChange?.startsWith('-') ? 'text-red-600' : 'text-green-600'
        },
        {
          title: 'Total Orders',
          value: (data.totalOrders || 0).toLocaleString(),
          change: data.ordersChange || '+0%',
          trend: data.ordersChange?.startsWith('-') ? 'down' : 'up',
          icon: FiShoppingCart,
          bgColor: 'bg-purple-50',
          iconColor: 'text-purple-600',
          changeColor: data.ordersChange?.startsWith('-') ? 'text-red-600' : 'text-green-600'
        },
        {
          title: 'Total Customers',
          value: (data.totalCustomers || 0).toLocaleString(),
          change: data.customersChange || '+0%',
          trend: data.customersChange?.startsWith('-') ? 'down' : 'up',
          icon: FiUsers,
          bgColor: 'bg-green-50',
          iconColor: 'text-green-600',
          changeColor: data.customersChange?.startsWith('-') ? 'text-red-600' : 'text-green-600'
        },
        {
          title: 'Products',
          value: (data.totalProducts || 0).toLocaleString(),
          change: data.productsChange || '+0%',
          trend: data.productsChange?.startsWith('-') ? 'down' : 'up',
          icon: FiPackage,
          bgColor: 'bg-orange-50',
          iconColor: 'text-orange-600',
          changeColor: data.productsChange?.startsWith('-') ? 'text-red-600' : 'text-green-600'
        }
      ];
      
      setStats(mappedStats);
      setError(null);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError('Failed to load dashboard statistics');
      // Set default empty stats on error
      setStats([
        {
          title: 'Total Revenue',
          value: '$0',
          change: '+0%',
          trend: 'up',
          icon: FiDollarSign,
          bgColor: 'bg-blue-50',
          iconColor: 'text-blue-600',
          changeColor: 'text-gray-600'
        },
        {
          title: 'Total Orders',
          value: '0',
          change: '+0%',
          trend: 'up',
          icon: FiShoppingCart,
          bgColor: 'bg-purple-50',
          iconColor: 'text-purple-600',
          changeColor: 'text-gray-600'
        },
        {
          title: 'Total Customers',
          value: '0',
          change: '+0%',
          trend: 'up',
          icon: FiUsers,
          bgColor: 'bg-green-50',
          iconColor: 'text-green-600',
          changeColor: 'text-gray-600'
        },
        {
          title: 'Products',
          value: '0',
          change: '+0%',
          trend: 'up',
          icon: FiPackage,
          bgColor: 'bg-orange-50',
          iconColor: 'text-orange-600',
          changeColor: 'text-gray-600'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, here's what's happening today</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <button
            onClick={fetchDashboardStats}
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;

