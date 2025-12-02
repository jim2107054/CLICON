const SalesChart = () => {
  const data = [
    { month: 'Jan', sales: 4500 },
    { month: 'Feb', sales: 5200 },
    { month: 'Mar', sales: 4800 },
    { month: 'Apr', sales: 6100 },
    { month: 'May', sales: 5800 },
    { month: 'Jun', sales: 7200 },
    { month: 'Jul', sales: 6800 },
    { month: 'Aug', sales: 7500 },
    { month: 'Sep', sales: 8200 },
    { month: 'Oct', sales: 7900 },
    { month: 'Nov', sales: 8600 },
    { month: 'Dec', sales: 9200 }
  ];

  const maxSales = Math.max(...data.map(d => d.sales));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
          <p className="text-sm text-gray-600 mt-1">Monthly sales performance</p>
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const heightPercentage = (item.sales / maxSales) * 100;
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600 font-medium">{item.month}</div>
              <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-end px-3 transition-all duration-500"
                  style={{ width: `${heightPercentage}%` }}
                >
                  <span className="text-white text-xs font-medium">${item.sales}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesChart;
