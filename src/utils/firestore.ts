// src/utils/firestore.ts
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (data: any) => {
  const timestamp = new Date().toISOString();
  return await addDoc(collection(db, 'products'), {
    ...data,
    createdAt: timestamp,
    updatedAt: timestamp,
  });
};

export const updateProduct = async (id: string, data: any) => {
  const productRef = doc(db, 'products', id);
  return await updateDoc(productRef, { ...data, updatedAt: new Date().toISOString() });
};

export const deleteProduct = async (id: string) => {
  return await deleteDoc(doc(db, 'products', id));
};
