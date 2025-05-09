'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apple', sales: 280000 },
  { name: 'Samsung', sales: 130000 },
];

export default function BrandPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
        <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
        <Bar dataKey="sales" fill="#1890ff" />
      </BarChart>
    </ResponsiveContainer>
  );
}
