import React, { useState } from 'react';
import { Search, Filter, Grid, List, Phone, Star, Tag } from 'lucide-react';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    'all', 'desktop', 'laptop', 'monitor', 'printer', 'accessory', 'used', 'custom'
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-10000', label: 'Under ₹10,000' },
    { value: '10000-25000', label: '₹10,000 - ₹25,000' },
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000+', label: 'Above ₹1,00,000' }
  ];

  const products = [
    {
      id: 1,
      name: 'Dell OptiPlex 7090',
      category: 'desktop',
      price: 45000,
      originalPrice: 52000,
      image: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intel i5 processor, 8GB RAM, 256GB SSD, Windows 11 Pro',
      rating: 4.8,
      isNew: true,
      inStock: true
    },
    {
      id: 2,
      name: 'HP Pavilion Gaming Laptop',
      category: 'laptop',
      price: 65000,
      originalPrice: 75000,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'AMD Ryzen 5, 16GB RAM, GTX 1650, 512GB SSD',
      rating: 4.6,
      isNew: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Samsung 27" 4K Monitor',
      category: 'monitor',
      price: 28000,
      originalPrice: 32000,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '4K UHD, IPS Panel, USB-C, Height Adjustable',
      rating: 4.9,
      isNew: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Logitech MX Master 3',
      category: 'accessory',
      price: 8500,
      originalPrice: 9500,
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Wireless mouse, ergonomic design, fast scrolling',
      rating: 4.7,
      isNew: false,
      inStock: true
    },
    {
      id: 5,
      name: 'Used ThinkPad T480',
      category: 'used',
      price: 35000,
      originalPrice: 40000,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intel i5, 8GB RAM, 256GB SSD, Grade A condition',
      rating: 4.5,
      isNew: false,
      inStock: true
    },
    {
      id: 6,
      name: 'Custom Gaming PC',
      category: 'custom',
      price: 85000,
      originalPrice: 95000,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'RTX 3070, AMD Ryzen 7, 32GB RAM, 1TB NVMe',
      rating: 5.0,
      isNew: true,
      inStock: true
    },
    {
      id: 7,
      name: 'HP LaserJet Pro',
      category: 'printer',
      price: 18000,
      originalPrice: 22000,
      image: 'https://images.pexels.com/photos/3761128/pexels-photo-3761128.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monochrome laser printer, Wi-Fi, automatic duplex',
      rating: 4.4,
      isNew: false,
      inStock: false
    },
    {
      id: 8,
      name: 'MacBook Air M2',
      category: 'laptop',
      price: 115000,
      originalPrice: 125000,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Apple M2 chip, 8GB RAM, 256GB SSD, Space Gray',
      rating: 4.9,
      isNew: true,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      if (priceRange === '100000+') {
        matchesPrice = product.price >= 100000;
      } else {
        const [min, max] = priceRange.split('-').map(Number);
        matchesPrice = product.price >= min && product.price <= max;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our wide range of computer hardware and accessories</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <Grid className="h-4 w-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <List className="h-4 w-4 mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">Showing {filteredProducts.length} products</p>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-4'
        }>
          {filteredProducts.map(product => (
            <div key={product.id} className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover ${
                    viewMode === 'list' ? 'h-32 rounded-l-xl' : 'h-48 rounded-t-xl'
                  }`}
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <Tag className="h-4 w-4 text-gray-600" />
                </div>
              </div>

              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href="tel:+91-9876543210"
                    className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 ${
                      !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!product.inStock}
                  >
                    <Phone className="h-4 w-4" />
                    <span>{product.inStock ? 'Call to Enquire' : 'Out of Stock'}</span>
                  </a>
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;