// src/pages/AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import {
  Eye, EyeOff, Plus, Edit, Trash2, Save, X, Star
} from 'lucide-react';
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
} from '../utils/productService';

interface Product {
  id: string;
  name: string;
  price: number;
  featured: boolean;
  image: string;
  description: string;
}

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data as Product[]);
  };

  useEffect(() => {
    if (isLoggedIn) loadProducts();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === adminUsername && loginData.password === adminPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  const handleProductSave = async (productData: Omit<Product, 'id'>) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
        setEditingProduct(null);
      } else {
        await addProduct(productData);
        setShowAddProduct(false);
      }
      await loadProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleProductDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      await loadProducts();
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={e => setLoginData({ ...loginData, username: e.target.value })}
            className="border p-2 w-full rounded"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={loginData.password}
              onChange={e => setLoginData({ ...loginData, password: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-2 text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button onClick={handleLogout} className="text-red-600 underline">Logout</button>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setShowAddProduct(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          <Plus className="inline-block mr-2" /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow">
            <img src={product.image} alt={product.name} className="h-40 object-cover w-full mb-2 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm">₹{product.price}</p>
            {product.featured && (
              <p className="text-yellow-600 text-xs font-semibold">
                <Star className="inline w-4 h-4 mr-1" /> Featured
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">{product.description}</p>
            <div className="mt-2 flex justify-between">
              <button
                onClick={() => setEditingProduct(product)}
                className="text-blue-600 flex items-center"
              >
                <Edit className="mr-1 w-4 h-4" /> Edit
              </button>
              <button
                onClick={() => handleProductDelete(product.id)}
                className="text-red-600 flex items-center"
              >
                <Trash2 className="mr-1 w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(editingProduct || showAddProduct) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-lg w-full relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">
                {editingProduct ? 'Edit Product' : 'Add Product'}
              </h3>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setShowAddProduct(false);
                }}
              >
                <X />
              </button>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                const form = e.currentTarget;
                handleProductSave({
                  name: form.name.value,
                  price: Number(form.price.value),
                  image: form.image.value,
                  description: form.description.value,
                  featured: form.featured.checked
                });
                form.reset();
              }}
              className="space-y-4"
            >
              <input
                name="name"
                defaultValue={editingProduct?.name || ''}
                placeholder="Product name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="price"
                type="number"
                defaultValue={editingProduct?.price || ''}
                placeholder="Price"
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="image"
                defaultValue={editingProduct?.image || ''}
                placeholder="Image URL"
                className="w-full p-2 border rounded"
              />
              <textarea
                name="description"
                defaultValue={editingProduct?.description || ''}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="featured"
                  defaultChecked={editingProduct?.featured || false}
                />
                <span>Featured Product</span>
              </label>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  <Save className="inline-block mr-1" /> {editingProduct ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;