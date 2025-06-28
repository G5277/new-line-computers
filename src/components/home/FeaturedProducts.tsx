import React, { useEffect, useState } from 'react';
import { Star, Phone, Tag } from 'lucide-react';
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  rating: number;
  isNew: boolean;
  featured: boolean;
};

const FeaturedProducts = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, 'nlc-1'));

      const data: Product[] = snapshot.docs.map(doc => {
        const raw = doc.data();

        return {
          id: doc.id,
          name: String(raw.name || ''),
          category: String(raw.category || ''),
          price: String(raw.price || ''),
          originalPrice: raw.originalPrice ? String(raw.originalPrice) : undefined,
          image: String(raw.image || ''),
          description: String(raw.description || ''),
          rating: Number(raw.rating || 0),
          isNew: Boolean(raw.isNew),
          featured: Boolean(raw.featured),
        };
      });

      const featuredProducts = data.filter(prod => prod.featured);
      console.log('⭐ Filtered featured products:', featuredProducts);
      setProducts(featuredProducts);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked selection of our best-selling and most popular tech products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {product.featured && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Tag className="h-5 w-5 text-gray-600" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call to Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
<Link to="/products" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center space-x-2">
  <span>View All Products</span>
</Link>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
