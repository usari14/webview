import { StaticImageData } from 'next/image';

// Logo
import logo from './mainlogo.png';

// Basil Seed Products
import basilSeedApple from './products/Basil Seed Apple.png';
import basilSeedLychee from './products/Basil Seed Lyche flavour.png';
import basilSeedMango from './products/Basil Seed Mango.png';
import basilSeedMixedFruit from './products/Basil Seed Mixed fruit.png';
import basilSeedOrange from './products/Basil Seed Orange.png';
import basilSeedPeach from './products/Basil Seed Peach Flavour.png';
import basilSeedPineApple from './products/basil seed Pine Apple.png';
import basilSeedSharbat from './products/Basil Seed Sharbat.png';
import basilSeedStrawberry from './products/Basil Seed strawberry.png';
import basilSeedPineGuava from './products/Basil Seel Pine Gauva.png';
import basilSeedPomegranate from './products/Bssil Seed pomegranate flavour.png';

// Nata de Coco Products
import cocoMango2 from './products/coc mango (2).png';
import cocoMango from './products/coc mango.png';
import cocoOrange from './products/coc orange.png';
import cocoBlueberry from './products/coco blue berry.png';
import cocoBubblegum from './products/coco bubblegum.png';
import cocoCoconut from './products/coco drink coconut.png';
import cocoDrinkMango from './products/coco drink mango.png';
import cocoPineApple from './products/coco drink PineApple.png';
import cocoFruitPunch from './products/Coco Fruit Punch.png';
import cocoLemonLime from './products/coco lemon lime.png';
import cocoLychee from './products/Coco Lyche.png';
import cocoPineApple2 from './products/coco pine apple.png';
import cocoStrawberry from './products/coco strawberry.png';
import mrCocoMango from './products/mr. coco mango.png';
import mrCocoRedGrapes from './products/mr. coco red grapes.png';
import nataDeCoco1 from './products/nata de coco 1.png';

// Certificate Images
import isoCert from './certificates/iso 22000.jpg';
import halalCert from './certificates/international hala.jpeg';
import sindhCert from './certificates/sindh food authority.png';

// Product Data Structure
export interface Product {
  id: string;
  name: string;
  category: 'Seed Drink' | 'Nata de Coco' | 'Falooda';
  image: string | StaticImageData;
  description: string;
}

export const products: Product[] = [
  // Basil Seed Products (Seed Drink)
  { id: '1', name: 'Basil Seed Apple', category: 'Seed Drink', image: basilSeedApple, description: 'Refreshing basil seed drink with crisp apple flavor' },
  { id: '2', name: 'Basil Seed Lychee', category: 'Seed Drink', image: basilSeedLychee, description: 'Exotic basil seed drink with sweet lychee taste' },
  { id: '3', name: 'Basil Seed Mango', category: 'Seed Drink', image: basilSeedMango, description: 'Tropical basil seed drink with rich mango flavor' },
  { id: '4', name: 'Basil Seed Mixed Fruit', category: 'Seed Drink', image: basilSeedMixedFruit, description: 'Delicious basil seed drink with mixed fruit blend' },
  { id: '5', name: 'Basil Seed Orange', category: 'Seed Drink', image: basilSeedOrange, description: 'Citrusy basil seed drink with fresh orange taste' },
  { id: '6', name: 'Basil Seed Peach', category: 'Seed Drink', image: basilSeedPeach, description: 'Sweet basil seed drink with juicy peach flavor' },
  { id: '7', name: 'Basil Seed Pineapple', category: 'Seed Drink', image: basilSeedPineApple, description: 'Tropical basil seed drink with tangy pineapple taste' },
  { id: '8', name: 'Basil Seed Sharbat', category: 'Seed Drink', image: basilSeedSharbat, description: 'Traditional basil seed sharbat with authentic flavor' },
  { id: '9', name: 'Basil Seed Strawberry', category: 'Seed Drink', image: basilSeedStrawberry, description: 'Sweet basil seed drink with fresh strawberry taste' },
  { id: '10', name: 'Basil Seed Pine Guava', category: 'Seed Drink', image: basilSeedPineGuava, description: 'Unique basil seed drink with pine guava flavor' },
  { id: '11', name: 'Basil Seed Pomegranate', category: 'Seed Drink', image: basilSeedPomegranate, description: 'Antioxidant-rich basil seed drink with pomegranate' },

  // Nata de Coco Products
  { id: '12', name: 'Coco Mango Special', category: 'Nata de Coco', image: cocoMango2, description: 'Premium nata de coco with rich mango flavor' },
  { id: '13', name: 'Coco Mango', category: 'Nata de Coco', image: cocoMango, description: 'Classic nata de coco with tropical mango taste' },
  { id: '14', name: 'Coco Orange', category: 'Nata de Coco', image: cocoOrange, description: 'Refreshing nata de coco with citrus orange flavor' },
  { id: '15', name: 'Coco Blueberry', category: 'Nata de Coco', image: cocoBlueberry, description: 'Antioxidant nata de coco with sweet blueberry taste' },
  { id: '16', name: 'Coco Bubblegum', category: 'Nata de Coco', image: cocoBubblegum, description: 'Fun nata de coco with unique bubblegum flavor' },
  { id: '17', name: 'Coco Coconut', category: 'Nata de Coco', image: cocoCoconut, description: 'Pure nata de coco with natural coconut taste' },
  { id: '18', name: 'Coco Drink Mango', category: 'Nata de Coco', image: cocoDrinkMango, description: 'Smooth nata de coco drink with mango essence' },
  { id: '19', name: 'Coco Pineapple', category: 'Nata de Coco', image: cocoPineApple, description: 'Tropical nata de coco with tangy pineapple flavor' },
  { id: '20', name: 'Coco Fruit Punch', category: 'Nata de Coco', image: cocoFruitPunch, description: 'Mixed fruit nata de coco with punch flavor' },
  { id: '21', name: 'Coco Lemon Lime', category: 'Nata de Coco', image: cocoLemonLime, description: 'Zesty nata de coco with lemon lime twist' },
  { id: '22', name: 'Coco Lychee', category: 'Nata de Coco', image: cocoLychee, description: 'Exotic nata de coco with sweet lychee flavor' },
  { id: '23', name: 'Coco Pineapple Classic', category: 'Nata de Coco', image: cocoPineApple2, description: 'Traditional nata de coco with pineapple taste' },
  { id: '24', name: 'Coco Strawberry', category: 'Nata de Coco', image: cocoStrawberry, description: 'Sweet nata de coco with fresh strawberry flavor' },
  { id: '25', name: 'Mr. Coco Mango', category: 'Nata de Coco', image: mrCocoMango, description: 'Premium Mr. Coco brand with mango flavor' },
  { id: '26', name: 'Mr. Coco Red Grapes', category: 'Nata de Coco', image: mrCocoRedGrapes, description: 'Delicious Mr. Coco with red grapes taste' },
  { id: '27', name: 'Nata de Coco Original', category: 'Nata de Coco', image: nataDeCoco1, description: 'Original nata de coco with classic taste' },

  // Falooda Products (using some Nata de Coco images for now)
  { id: '28', name: 'Falooda Mango', category: 'Falooda', image: cocoMango, description: 'Rich and creamy mango falooda with traditional taste' },
  { id: '29', name: 'Falooda Strawberry', category: 'Falooda', image: cocoStrawberry, description: 'Sweet strawberry falooda with authentic flavor' },
  { id: '30', name: 'Falooda Lychee', category: 'Falooda', image: cocoLychee, description: 'Exotic lychee falooda with premium ingredients' },
  { id: '31', name: 'Falooda Fruit Punch', category: 'Falooda', image: cocoFruitPunch, description: 'Mixed fruit falooda with tropical taste' },
  { id: '32', name: 'Falooda Blueberry', category: 'Falooda', image: cocoBlueberry, description: 'Antioxidant-rich blueberry falooda' },
];

export const certificates = {
  iso: isoCert,
  halal: halalCert,
  sindh: sindhCert
};

export { logo };

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'Show All') return products;
  return products.filter(product => product.category === category);
};

export const getProductImage = (id: string) => {
  const product = getProductById(id);
  return product?.image || products[0].image;
};