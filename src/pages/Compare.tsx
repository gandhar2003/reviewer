import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Compare = () => {
  const [product1, setProduct1] = useState('iPhone 15 Pro Max');
  const [product2, setProduct2] = useState('Samsung Galaxy S24 Ultra');

  const comparisonData = {
    'Performance': {
      'iPhone 15 Pro Max': 'A17 Pro chip, fastest in class',
      'Samsung Galaxy S24 Ultra': 'Snapdragon 8 Gen 3, excellent performance'
    },
    'Display': {
      'iPhone 15 Pro Max': '6.7" Super Retina XDR OLED',
      'Samsung Galaxy S24 Ultra': '6.8" Dynamic AMOLED 2X'
    },
    'Camera': {
      'iPhone 15 Pro Max': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Samsung Galaxy S24 Ultra': '200MP Main + 12MP Ultra Wide + 2x 10MP Telephoto'
    },
    'Battery': {
      'iPhone 15 Pro Max': '4422 mAh',
      'Samsung Galaxy S24 Ultra': '5000 mAh'
    },
    'Price': {
      'iPhone 15 Pro Max': 'Starting at $1,199',
      'Samsung Galaxy S24 Ultra': 'Starting at $1,299'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Compare Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={product1}
            onChange={(e) => setProduct1(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search first product..."
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={product2}
            onChange={(e) => setProduct2(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search second product..."
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Feature</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">{product1}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">{product2}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Object.entries(comparisonData).map(([feature, values]) => (
              <tr key={feature} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{feature}</td>
                <td className="px-6 py-4">{values[product1]}</td>
                <td className="px-6 py-4">{values[product2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;