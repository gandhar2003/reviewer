import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight } from 'lucide-react';

const products = {
  smartphones: [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
      description: 'The most powerful iPhone ever with A17 Pro chip.',
      price: '$1,199',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
      description: 'Revolutionary AI features and camera capabilities.',
      price: '$1,299',
    }
  ],
  laptops: [
    {
      id: 3,
      name: 'MacBook Pro 16"',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      description: 'Incredible performance with M3 Max chip.',
      price: '$2,499',
    },
    {
      id: 4,
      name: 'Dell XPS 15',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
      description: 'Premium Windows laptop with OLED display.',
      price: '$1,999',
    }
  ],
  wearables: [
    {
      id: 5,
      name: 'Apple Watch Series 9',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9',
      description: 'Advanced health features and sleek design.',
      price: '$399',
    },
    {
      id: 6,
      name: 'Samsung Galaxy Watch 6',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
      description: 'Complete health tracking and smart features.',
      price: '$349',
    }
  ],
  gaming: [
    {
      id: 7,
      name: 'PlayStation 5',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf',
      description: 'Next-gen gaming with ray tracing.',
      price: '$499',
    },
    {
      id: 8,
      name: 'Xbox Series X',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d',
      description: 'Most powerful Xbox ever built.',
      price: '$499',
    }
  ]
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products[category as keyof typeof products] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 capitalize">{category} Reviews</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            to={`/review/${product.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold">{product.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-indigo-600">
                  {product.name}
                </h3>
                <span className="text-lg font-semibold text-indigo-600">
                  {product.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center text-indigo-600 font-semibold">
                Read Review <ArrowUpRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;