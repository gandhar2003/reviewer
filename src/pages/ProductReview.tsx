import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ThumbsUp, ThumbsDown, Share2, ShoppingCart } from 'lucide-react';

const ProductReview = () => {
  const { productId } = useParams();

  // Mock product data
  const product = {
    id: Number(productId),
    name: 'iPhone 15 Pro Max',
    rating: 4.8,
    price: '$1,199',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
    description: 'The iPhone 15 Pro Max represents Apple\'s most advanced smartphone yet, featuring the powerful A17 Pro chip, a sophisticated camera system, and a durable titanium design.',
    pros: [
      'Exceptional performance with A17 Pro chip',
      'Premium titanium build quality',
      'Versatile camera system',
      'Excellent battery life'
    ],
    cons: [
      'Premium pricing',
      'Heavy device',
      'Limited customization options'
    ],
    specs: {
      processor: 'A17 Pro',
      display: '6.7" Super Retina XDR OLED',
      camera: '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      battery: '4422 mAh',
      storage: '256GB - 1TB'
    },
    verdict: 'The iPhone 15 Pro Max sets a new standard for flagship smartphones with its exceptional performance, premium build quality, and advanced camera capabilities. While the price point may be steep, it delivers value through its longevity and ecosystem integration.'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-indigo-100 px-3 py-1 rounded-full">
              <Star className="w-5 h-5 text-indigo-600 fill-current" />
              <span className="ml-1 font-semibold">{product.rating}/5.0</span>
            </div>
            <span className="ml-4 text-2xl font-bold text-indigo-600">{product.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy Now
            </button>
            <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-green-700">
            <ThumbsUp className="w-5 h-5 mr-2" />
            Pros
          </h2>
          <ul className="space-y-2">
            {product.pros.map((pro, index) => (
              <li key={index} className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-red-700">
            <ThumbsDown className="w-5 h-5 mr-2" />
            Cons
          </h2>
          <ul className="space-y-2">
            {product.cons.map((con, index) => (
              <li key={index} className="flex items-center text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-500 mb-1 capitalize">{key}</h3>
              <p className="text-lg font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Our Verdict</h2>
        <p className="text-gray-800 leading-relaxed">{product.verdict}</p>
      </div>
    </div>
  );
};

export default ProductReview;