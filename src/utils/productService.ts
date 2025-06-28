import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs
} from 'firebase/firestore';

const productsRef = collection(db, 'nlc-1');

export type ProductPayload = {
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  isNew: boolean;
  inStock: boolean;
  featured: boolean;
};

// 🔹 Add a new product
export const addProduct = async (data: ProductPayload) => {
  console.log("📤 Saving to Firebase:", data);
  const docRef = await addDoc(productsRef, data);
  console.log("✅ Saved with ID:", docRef.id);
  return docRef.id;
};

// 🔹 Update an existing product
export const updateProduct = async (id: string, data: Partial<ProductPayload>) => {
  const productDoc = doc(db, 'nlc-1', id);
  await updateDoc(productDoc, data);
};

// 🔹 Delete a product
export const deleteProduct = async (id: string) => {
  const productDoc = doc(db, 'nlc-1', id);
  await deleteDoc(productDoc);
};

// 🔹 Fetch all products
export const getAllProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
