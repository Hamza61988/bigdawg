'use client';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const inventoryData = [
  { name: 'Apple', value: 32 },
  { name: 'Samsung', value: 50 },
  { name: 'Google', value: 18 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function InventoryChart() {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={inventoryData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      >
        {inventoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
