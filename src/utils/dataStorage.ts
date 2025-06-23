// Local data storage utilities
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RepairRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  deviceType: string;
  issue: string;
  urgency: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

// Products storage
export const saveProducts = (products: Product[]) => {
  localStorage.setItem('newline_products', JSON.stringify(products));
};

export const loadProducts = (): Product[] => {
  try {
    const stored = localStorage.getItem('newline_products');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load products:', error);
    return [];
  }
};

export const addProduct = (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product => {
  const products = loadProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: number, updates: Partial<Product>): Product | null => {
  const products = loadProducts();
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  products[index] = {
    ...products[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveProducts(products);
  return products[index];
};

export const deleteProduct = (id: number): boolean => {
  const products = loadProducts();
  const filtered = products.filter(p => p.id !== id);
  
  if (filtered.length === products.length) return false;
  
  saveProducts(filtered);
  return true;
};

// Repair requests storage
export const saveRepairRequests = (requests: RepairRequest[]) => {
  localStorage.setItem('newline_repair_requests', JSON.stringify(requests));
};

export const loadRepairRequests = (): RepairRequest[] => {
  try {
    const stored = localStorage.getItem('newline_repair_requests');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load repair requests:', error);
    return [];
  }
};

export const addRepairRequest = (request: Omit<RepairRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>): RepairRequest => {
  const requests = loadRepairRequests();
  const newRequest: RepairRequest = {
    ...request,
    id: Date.now(),
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  requests.push(newRequest);
  saveRepairRequests(requests);
  return newRequest;
};

export const updateRepairRequestStatus = (id: number, status: RepairRequest['status']): RepairRequest | null => {
  const requests = loadRepairRequests();
  const index = requests.findIndex(r => r.id === id);
  
  if (index === -1) return null;
  
  requests[index] = {
    ...requests[index],
    status,
    updatedAt: new Date().toISOString()
  };
  
  saveRepairRequests(requests);
  return requests[index];
};

// Export data for backup
export const exportData = () => {
  const data = {
    products: loadProducts(),
    repairRequests: loadRepairRequests(),
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `newline-computers-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Import data from backup
export const importData = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        
        if (data.products) {
          saveProducts(data.products);
        }
        if (data.repairRequests) {
          saveRepairRequests(data.repairRequests);
        }
        
        resolve(true);
      } catch (error) {
        console.error('Failed to import data:', error);
        resolve(false);
      }
    };
    reader.onerror = () => resolve(false);
    reader.readAsText(file);
  });
};