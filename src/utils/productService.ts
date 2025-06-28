import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs
} from 'firebase/firestore';

const productsRef = collection(db, 'products');

export type ProductPayload = {
  name: string;
  price: number;
  featured: boolean;
  image: string;
  description: string;
};

// 🔹 Add a new product
export const addProduct = async (data: ProductPayload) => {
  const docRef = await addDoc(productsRef, data);
  return docRef.id;
};

// 🔹 Update an existing product
export const updateProduct = async (id: string, data: Partial<ProductPayload>) => {
  const productDoc = doc(db, 'products', id);
  await updateDoc(productDoc, data);
};

// 🔹 Delete a product
export const deleteProduct = async (id: string) => {
  const productDoc = doc(db, 'products', id);
  await deleteDoc(productDoc);
};

// 🔹 Fetch all products
export const getAllProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
