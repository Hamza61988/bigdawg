'use client';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 0 },
  { month: 'Feb', revenue: 0 },
  { month: 'Mar', revenue: 0 },
  { month: 'Apr', revenue: 0 },
  { month: 'May', revenue: 0 },
  { month: 'Jun', revenue: 0 },
  { month: 'Jul', revenue: 0 },
  { month: 'Aug', revenue: 0 },
  { month: 'Sep', revenue: 0 },
  { month: 'Oct', revenue: 0 },
  { month: 'Nov', revenue: 0 },
  { month: 'Dec', revenue: 0 },
];

export default function MonthlyRevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`} />
        <Tooltip formatter={(value: number) => `Rs. ${value}`} />
        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#ccc" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
