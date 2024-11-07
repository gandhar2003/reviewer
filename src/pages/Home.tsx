import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ThumbsUp, Award } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'smartphones',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
      description: 'The latest flagship from Apple with revolutionary features.'
    },
    {
      id: 2,
      name: 'MacBook Pro M3',
      category: 'laptops',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      description: 'Incredible performance meets stunning display technology.'
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      category: 'wearables',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9',
      description: 'Advanced health features and seamless connectivity.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Tech Reviews You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Make informed decisions with our comprehensive product reviews
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/category/smartphones"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Browse Reviews
            </Link>
            <Link
              to="/compare"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/review/${product.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 font-semibold">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-600">
                In-depth analysis from tech professionals
              </p>
            </div>
            <div className="text-center">
              <ThumbsUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Ratings</h3>
              <p className="text-gray-600">
                Real feedback from our community
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unbiased Opinion</h3>
              <p className="text-gray-600">
                Honest and transparent reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;