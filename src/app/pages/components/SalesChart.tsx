'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const salesData = [
  { name: 'Jan', sales: 130000 },
  { name: 'Feb', sales: 380000 },
  { name: 'Mar', sales: 340000 },
  { name: 'Apr', sales: 450000 },
  { name: 'May', sales: 310000 },
  { name: 'Jun', sales: 360000 },
];

export default function SalesChart() {
  return (
    <BarChart width={500} height={300} data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(value) => `${value / 1000}k`} />
      <Tooltip />
      <Bar dataKey="sales" fill="#0088FE" />
    </BarChart>
  );
}
