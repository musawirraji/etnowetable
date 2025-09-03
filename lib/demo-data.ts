export interface Store {
  id: string;
  name: string;
  storeId: string;
  city: string;
  state: string;
  email: string;
  registrationStatus: 'verified' | 'not_verified' | 'pending';
  merchantType: string;
  joinDate: Date;
  revenue: number;
}

export interface Product {
  id: string;
  name: string;
  productId: string;
  brand: string;
  category: string;
  size: string;
  priceType: 'fixed' | 'variable';
  price: number;
  stock: number;
  lastUpdated: Date;
  image?: string;
}

export const storeData: Store[] = [
  {
    id: '1',
    name: 'Rimox Foods',
    storeId: '597',
    city: 'Frisco',
    state: 'TX',
    email: 'rimox50434@endibi...',
    registrationStatus: 'verified',
    merchantType: 'Chops',
    joinDate: new Date('2023-01-15'),
    revenue: 125000,
  },
  {
    id: '2',
    name: 'Peter',
    storeId: '508',
    city: 'Reston',
    state: 'VA',
    email: 'bipeyah137@brinkc...',
    registrationStatus: 'not_verified',
    merchantType: 'Chops',
    joinDate: new Date('2023-03-22'),
    revenue: 87500,
  },
  {
    id: '3',
    name: 'New Restaurant Test',
    storeId: '576',
    city: 'Dallas',
    state: 'TX',
    email: 'test.ca500@yopmai...',
    registrationStatus: 'not_verified',
    merchantType: 'Chops',
    joinDate: new Date('2023-06-08'),
    revenue: 45000,
  },
  {
    id: '4',
    name: 'Dayima Store',
    storeId: '587',
    city: 'Owings Mills',
    state: 'MD',
    email: 'dayima8426@eths...',
    registrationStatus: 'not_verified',
    merchantType: 'Grocery',
    joinDate: new Date('2023-04-12'),
    revenue: 156000,
  },
  {
    id: '5',
    name: 'Abass Rubbish Store',
    storeId: '499',
    city: 'Owings Mills',
    state: 'MD',
    email: 'haled15628@stikez...',
    registrationStatus: 'not_verified',
    merchantType: 'Grocery',
    joinDate: new Date('2023-02-28'),
    revenue: 98000,
  },
  {
    id: '6',
    name: 'New Market',
    storeId: '507',
    city: 'Reston',
    state: 'VA',
    email: 'xodooef516@alboru...',
    registrationStatus: 'not_verified',
    merchantType: 'Grocery',
    joinDate: new Date('2023-05-19'),
    revenue: 234000,
  },
  {
    id: '7',
    name: 'Fresh Foods Market',
    storeId: '612',
    city: 'Austin',
    state: 'TX',
    email: 'fresh.foods@market...',
    registrationStatus: 'verified',
    merchantType: 'Grocery',
    joinDate: new Date('2023-07-03'),
    revenue: 189000,
  },
  {
    id: '8',
    name: 'Quick Bite Cafe',
    storeId: '623',
    city: 'Seattle',
    state: 'WA',
    email: 'quickbite@cafe...',
    registrationStatus: 'pending',
    merchantType: 'Chops',
    joinDate: new Date('2023-08-15'),
    revenue: 67000,
  },
  {
    id: '9',
    name: 'Corner Deli',
    storeId: '634',
    city: 'Miami',
    state: 'FL',
    email: 'corner.deli@email...',
    registrationStatus: 'verified',
    merchantType: 'Deli',
    joinDate: new Date('2023-09-01'),
    revenue: 112000,
  },
  {
    id: '10',
    name: 'Urban Eats',
    storeId: '645',
    city: 'New York',
    state: 'NY',
    email: 'urban.eats@ny...',
    registrationStatus: 'pending',
    merchantType: 'Restaurant',
    joinDate: new Date('2023-09-22'),
    revenue: 289000,
  },
];

export const productData: Product[] = [
  {
    id: '1',
    name: 'Ali',
    productId: '185',
    brand: 'Ghias',
    category: 'BAKERY',
    size: '12',
    priceType: 'fixed',
    price: 8.99,
    stock: 150,
    lastUpdated: new Date('2023-10-01'),
    image: '/products/ali-bakery.jpg',
  },
  {
    id: '2',
    name: 'Yodas',
    productId: '188',
    brand: 'Tessy',
    category: 'BREAKFAST & CEREAL',
    size: '13 Fl Oz',
    priceType: 'fixed',
    price: 12.49,
    stock: 89,
    lastUpdated: new Date('2023-10-02'),
    image: '/products/yodas-cereal.jpg',
  },
  {
    id: '3',
    name: 'Update Names',
    productId: '190',
    brand: 'Asaso',
    category: 'BABY',
    size: '11 Fl',
    priceType: 'fixed',
    price: 15.99,
    stock: 45,
    lastUpdated: new Date('2023-09-28'),
    image: '/products/baby-formula.jpg',
  },
  {
    id: '4',
    name: 'Test 4',
    productId: '192',
    brand: 'Test 22',
    category: 'BABY',
    size: '12',
    priceType: 'fixed',
    price: 9.99,
    stock: 78,
    lastUpdated: new Date('2023-10-03'),
    image: '/products/baby-food.jpg',
  },
  {
    id: '5',
    name: 'Hafiz',
    productId: '196',
    brand: 'New Brand',
    category: 'BREAKFAST & CEREAL',
    size: '5 Lb',
    priceType: 'fixed',
    price: 18.99,
    stock: 34,
    lastUpdated: new Date('2023-09-30'),
    image: '/products/hafiz-cereal.jpg',
  },
  {
    id: '6',
    name: 'For',
    productId: '197',
    brand: 'Example',
    category: 'BABY',
    size: '12 Oz',
    priceType: 'fixed',
    price: 11.99,
    stock: 67,
    lastUpdated: new Date('2023-10-04'),
    image: '/products/baby-snacks.jpg',
  },
  {
    id: '7',
    name: 'Premium Bread',
    productId: '201',
    brand: 'Artisan',
    category: 'BAKERY',
    size: '24 Oz',
    priceType: 'fixed',
    price: 4.99,
    stock: 120,
    lastUpdated: new Date('2023-10-05'),
    image: '/products/premium-bread.jpg',
  },
  {
    id: '8',
    name: 'Organic Oats',
    productId: '205',
    brand: "Nature's Best",
    category: 'BREAKFAST & CEREAL',
    size: '32 Oz',
    priceType: 'variable',
    price: 14.99,
    stock: 95,
    lastUpdated: new Date('2023-10-06'),
    image: '/products/organic-oats.jpg',
  },
  {
    id: '9',
    name: 'Baby Formula Plus',
    productId: '208',
    brand: 'Little Ones',
    category: 'BABY',
    size: '28 Oz',
    priceType: 'fixed',
    price: 22.99,
    stock: 56,
    lastUpdated: new Date('2023-10-07'),
    image: '/products/baby-formula-plus.jpg',
  },
  {
    id: '10',
    name: 'Whole Grain Crackers',
    productId: '212',
    brand: 'Healthy Choice',
    category: 'SNACKS',
    size: '8 Oz',
    priceType: 'fixed',
    price: 6.99,
    stock: 200,
    lastUpdated: new Date('2023-10-08'),
    image: '/products/whole-grain-crackers.jpg',
  },
];

export const getUniqueCategories = (products: Product[]): string[] => {
  return Array.from(new Set(products.map((p) => p.category))).sort();
};

export const getUniqueBrands = (products: Product[]): string[] => {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
};

export const getUniqueStates = (stores: Store[]): string[] => {
  return Array.from(new Set(stores.map((s) => s.state))).sort();
};

export const getUniqueMerchantTypes = (stores: Store[]): string[] => {
  return Array.from(new Set(stores.map((s) => s.merchantType))).sort();
};

export const filterStoresByStatus = (
  stores: Store[],
  status: Store['registrationStatus']
): Store[] => {
  return stores.filter((store) => store.registrationStatus === status);
};

export const filterProductsByCategory = (
  products: Product[],
  category: string
): Product[] => {
  return products.filter((product) => product.category === category);
};

export const searchStores = (stores: Store[], query: string): Store[] => {
  const lowercaseQuery = query.toLowerCase();
  return stores.filter(
    (store) =>
      store.name.toLowerCase().includes(lowercaseQuery) ||
      store.city.toLowerCase().includes(lowercaseQuery) ||
      store.state.toLowerCase().includes(lowercaseQuery) ||
      store.email.toLowerCase().includes(lowercaseQuery) ||
      store.merchantType.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchProducts = (
  products: Product[],
  query: string
): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.size.toLowerCase().includes(lowercaseQuery)
  );
};
