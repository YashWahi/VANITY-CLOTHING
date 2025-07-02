import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Rebel Hoodie",
    price: 89.99,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Hoodies",
    description: "Premium streetwear hoodie with bold graphics and superior comfort."
  },
  {
    id: 2,
    name: "Street Elite Jacket",
    price: 149.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Jackets",
    description: "Edgy leather-style jacket that defines urban sophistication."
  },
  {
    id: 3,
    name: "Rebel Cargo Pants",
    price: 79.99,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pants",
    description: "Tactical-inspired cargo pants for the modern street warrior."
  },
  {
    id: 4,
    name: "Vanity Signature Tee",
    price: 39.99,
    image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "T-Shirts",
    description: "Essential streetwear tee with our iconic Vanity branding."
  },
  {
    id: 5,
    name: "Underground Sneakers",
    price: 129.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Footwear",
    description: "Limited edition sneakers for those who dare to stand out."
  },
  {
    id: 6,
    name: "Midnight Bomber",
    price: 199.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Jackets",
    description: "Premium bomber jacket with exclusive Vanity design elements."
  },
  {
    id: 7,
    name: "Rebel Chain Necklace",
    price: 49.99,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Accessories",
    description: "Statement chain necklace that completes your street look."
  },
  {
    id: 8,
    name: "Street Crown Beanie",
    price: 29.99,
    image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Accessories",
    description: "Embroidered beanie with Vanity's signature crown logo."
  }
];

export const categories = [
  "All",
  "Shirt",
  "Tshirt",
  "Formals",
  "Casuals",
  "Season",
  "Sale",
  "Co ords",
  "Jeans",
  "Trousers",
  "Collections",
  "Bestsellers",
  "Accessories"
];