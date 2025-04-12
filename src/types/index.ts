export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  properties: number;
}