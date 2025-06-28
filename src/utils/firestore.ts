import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './firebase';

// Define the Product interface
export interface Product {
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;
}

// Get all products from Firestore
export const getProducts = async (): Promise<(Product & { id: string })[]> => {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (Product & { id: string })[];
};

// Add a new product to Firestore
export const addProduct = async (data: Product): Promise<void> => {
  const timestamp = new Date().toISOString();
  await addDoc(collection(db, 'products'), {
    ...data,
    createdAt: timestamp,
    updatedAt: timestamp,
  });
};

// Update an existing product by ID
export const updateProduct = async (
  id: string,
  data: Partial<Product>
): Promise<void> => {
  const productRef = doc(db, 'products', id);
  await updateDoc(productRef, {
    ...data,
    updatedAt: new Date().toISOString(),
  });
};

// Delete a product by ID
export const deleteProduct = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'products', id));
};
