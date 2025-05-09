'use client';
import dynamic from 'next/dynamic';

const BrandPerformanceChart = dynamic(() => import('../components/BrandPerformanceChart'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

const UnitsSoldChart = dynamic(() => import('../components/UnitsSoldChart'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

const MonthlyRevenueChart = dynamic(() => import('../components/MonthlyRevenueChart'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Analytics</h1>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Insights about your sales, inventory, and revenue
      </p>

      {/* Grid for charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Brand Performance Bar Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Brand Performance</h2>
          <div className="w-full h-60 sm:h-80">
            <BrandPerformanceChart />
          </div>
        </div>

        {/* Units Sold Pie Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Units Sold by Brand</h2>
          <div className="w-full h-60 sm:h-80">
            <UnitsSoldChart />
          </div>
        </div>
      </div>

      {/* Monthly Revenue Line Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-200 mt-6 sm:mt-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Monthly Revenue (This Year)</h2>
        <div className="w-full h-60 sm:h-80">
          <MonthlyRevenueChart />
        </div>
      </div>

      {/* Button for Adding Records */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <button className="bg-blue-500 text-white rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Record Sale
        </button>
      </div>
    </div>
  );
}
