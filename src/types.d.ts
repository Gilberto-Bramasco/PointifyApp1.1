export interface Menu {
  label: string;
  icon: string;
  href: string;
}

export interface Category {
  id: string; // Agregar ID único
  name: string; // Cambiar de "category" a "name" para consistencia
}

export interface Product {
  id: string; // Agregar ID único
  name: string;
  category: string;
  image: string;
  discount: number;
  stock: number;
  price: number;
  description: string;
}

export interface ProductCart {
  id: string; // Agregar ID único
  name: string;
  image: string;
  price: number;
  quantity: number;
}