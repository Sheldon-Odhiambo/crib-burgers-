import { MenuItem, Testimonial } from './types';

export const MENU_DATA: MenuItem[] = [
  {
    id: 'ex-5',
    name: 'Mix Gourmet Fries',
    category: 'Extras',
    price: 1,
    description: 'Crispy golden fries.',
    image: './images/fries.jpg'
  },
  {
    id: 'hd-1',
    name: 'Le Hot Delice Hot Dog',
    category: 'Signature',
    price: 1,
    description: 'Delicious hot dog with special toppings.',
    image: './images/hotdog.jpg'
  },
  {
    id: 'sig-3',
    name: 'Crib Signature Burger',
    category: 'Signature',
    price: 1,
    description: 'Crib signature burger.',
    image: './images/signature-1.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Kynthia M.",
    tag: "Regular Customer",
    rating: 5,
    text: "Crib really does a good job l enjoy their Burgers."
  },
  {
    id: 2,
    name: "Ramos R.",
    tag: "Customer ",
    rating: 5,
    text: "The Flavor and the texture of their Burgers are very good, definitely l will recommend Crib Burgers, You Can't Eat Only One, Taste like Africa"
  },
  {
    id: 3,
    name: "Sheldon O.",
    tag: "Local Resident",
    rating: 5,
    text: "Crib Burgers never misses. It's my favorite weekend treat. Fast ordering via WhatsApp and always fresh and hot when it arrives."
  }
];

export const PHONE_NUMBER = '0772973573';
export const WHATSAPP_NUMBER = '263772973573';
export const EMAIL_ADDRESS = 'cribburgerszim@gmail.com';

export const PAYMENT_METHODS = [
  { name: 'Ecocash', details: '+263772973573', icon: 'Smartphone' },
  { name: 'USD Account', details: 'Details available upon request', icon: 'Landmark' },
  { name: 'Cash (USD)', details: 'In-person', icon: 'Banknote' },
  { name: 'Sendwave', details: '+263772973573', icon: 'Globe' },
];