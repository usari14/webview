// Logo
import logo from './mainlogo.png';

// Product Images (1-60)
import product1 from './products/1.png';
import product2 from './products/2.png';
import product3 from './products/3.png';
import product4 from './products/4.png';
import product5 from './products/5.png';
import product6 from './products/6.png';
import product7 from './products/7.png';
import product8 from './products/8.png';
import product9 from './products/9.png';
import product10 from './products/10.png';
import product11 from './products/11.png';
import product12 from './products/12.png';
import product13 from './products/13.png';
import product14 from './products/14.png';
import product15 from './products/15.png';
import product16 from './products/16.png';
import product17 from './products/17.png';
import product18 from './products/18.png';
import product19 from './products/19.png';
import product20 from './products/20.png';
import product21 from './products/21.png';
import product22 from './products/22.png';
import product23 from './products/23.png';
import product24 from './products/24.png';
import product25 from './products/25.png';
import product26 from './products/26.png';
import product27 from './products/27.png';
import product28 from './products/28.png';
import product29 from './products/29.png';
import product30 from './products/30.png';
import product31 from './products/31.png';
import product32 from './products/32.png';
import product33 from './products/33.png';
import product34 from './products/34.png';
import product35 from './products/35.png';
import product36 from './products/36.png';
import product37 from './products/37.png';
import product38 from './products/38.png';
import product39 from './products/39.png';
import product40 from './products/40.png';
import product41 from './products/41.png';
import product42 from './products/42.png';
import product43 from './products/43.png';
import product44 from './products/44.png';
import product45 from './products/45.png';
import product46 from './products/46.png';
import product47 from './products/47.png';
import product48 from './products/48.png';
import product49 from './products/49.png';
import product50 from './products/50.png';
import product51 from './products/51.png';
import product52 from './products/52.png';
import product53 from './products/53.png';
import product54 from './products/54.png';
import product55 from './products/55.png';
import product56 from './products/56.png';
import product57 from './products/57.png';
import product58 from './products/58.png';
import product59 from './products/59.png';
import product60 from './products/60.png';

// Certificate Images
import isoCert from './certificates/iso 22000.jpg';
import halalCert from './certificates/international hala.jpeg';
import sindhCert from './certificates/sindh food authority.png';

// Export all images
export const productImages = [
  product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15, product16, product17, product18, product19, product20,
  product21, product22, product23, product24, product25, product26, product27, product28, product29, product30,
  product31, product32, product33, product34, product35, product36, product37, product38, product39, product40,
  product41, product42, product43, product44, product45, product46, product47, product48, product49, product50,
  product51, product52, product53, product54, product55, product56, product57, product58, product59, product60
];

export const certificates = {
  iso: isoCert,
  halal: halalCert,
  sindh: sindhCert
};

export { logo };

// Helper function to get product image by index (1-based)
export const getProductImage = (index: number) => {
  return productImages[index - 1] || productImages[0];
};