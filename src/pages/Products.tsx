import React, { useEffect, useState } from 'react';
import { Search, Filter, Grid, List, Phone, Star, Tag } from 'lucide-react';
import { db } from '../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  isNew: boolean;
  inStock: boolean;
  featured?: boolean;
};

const Products = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [products, setProducts] = useState<Product[]>([]);

  const categories = ['all', 'desktop', 'laptop', 'monitor', 'printer', 'accessory', 'used', 'custom'];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-10000', label: 'Under ₹10,000' },
    { value: '10000-25000', label: '₹10,000 - ₹25,000' },
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000+', label: 'Above ₹1,00,000' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, 'nlc-1'));
      const data: Product[] = snapshot.docs.map((doc) => {
        const raw = doc.data();
        return {
          id: doc.id,
          name: String(raw.name || ''),
          category: String(raw.category || ''),
          price: Number(raw.price?.toString().replace(/[₹,]/g, '') || 0),
          originalPrice: raw.originalPrice
            ? Number(raw.originalPrice.toString().replace(/[₹,]/g, ''))
            : undefined,
          image: String(raw.image || ''),
          description: String(raw.description || ''),
          rating: Number(raw.rating || 0),
          isNew: Boolean(raw.isNew),
          inStock: raw.inStock !== undefined ? Boolean(raw.inStock) : true,
          featured: Boolean(raw.featured),
        };
      });

      console.log('📦 All products:', data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

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
    })
    .sort((a, b) => {
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
            <select title='Product Category'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select title='Price Range'
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select title="Sort products"
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

        {/* Product Cards */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover ${viewMode === 'list' ? 'h-32 rounded-l-xl' : 'h-48 rounded-t-xl'}`}
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">New</span>
                  )}
                  {!product.inStock && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Out of Stock</span>
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
                    <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 ${
                      !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => !product.inStock && e.preventDefault()}
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