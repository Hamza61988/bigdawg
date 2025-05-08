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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Analytics</h1>
      <p className="text-gray-600 mb-6">Insights about your sales, inventory, and revenue</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand Performance Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Brand Performance</h2>
          <BrandPerformanceChart />
        </div>

        {/* Units Sold Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Units Sold by Brand</h2>
          <UnitsSoldChart />
        </div>
      </div>

      {/* Monthly Revenue Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mt-8">
        <h2 className="text-xl font-bold mb-4">Monthly Revenue (This Year)</h2>
        <MonthlyRevenueChart />
      </div>
    </div>
  );
}
