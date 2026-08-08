export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Signature' | 'Texas' | 'My Friend' | 'Extras';
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  tag: string;
}
