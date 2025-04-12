export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface Stylist {
  id: string;
  name: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Appointment {
  id: string;
  service_id: string;
  stylist_id: string;
  client_id: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}