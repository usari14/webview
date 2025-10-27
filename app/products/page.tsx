'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "../../components/Navigation";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Handle URL filter parameter
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const filters = [
    "Show All", "Seed Drink", "Nata de Coco", "Falooda"
  ];

  // Generate products dynamically based on available PNG images
  const generateProducts = () => {
    const products = [];
    let id = 1;
    
    const flavors = [
      'Original', 'Strawberry', 'Mango', 'Lychee', 'Coconut', 'Pineapple', 'Grape', 'Apple', 'Orange', 'Peach',
      'Kiwi', 'Passion Fruit', 'Blueberry', 'Cherry', 'Watermelon', 'Guava', 'Papaya', 'Dragon Fruit', 'Pomegranate', 'Lime'
    ];
    
    // Seed products - PNG versions (20 images)
    for (let i = 1; i <= 20; i++) {
      products.push({
        id: String(id++),
        name: `Basil Seed Drink ${flavors[i-1] || `Flavor ${i}`}`,
        category: 'Seed Drink',
        image: `/images/products/seed/${i}.png`,
        description: `Refreshing basil seed drink with ${(flavors[i-1] || `flavor ${i}`).toLowerCase()} taste`
      });
    }
    
    // Nata de Coco products - PNG versions (20 images)
    for (let i = 1; i <= 20; i++) {
      products.push({
        id: String(id++),
        name: `Nata de Coco ${flavors[i-1] || `Flavor ${i}`}`,
        category: 'Nata de Coco',
        image: `/images/products/nata de coco/${i}.png`,
        description: `Delicious nata de coco with ${(flavors[i-1] || `flavor ${i}`).toLowerCase()} taste`
      });
    }
    
    // Falooda products - PNG versions (20 images)
    for (let i = 1; i <= 20; i++) {
      products.push({
        id: String(id++),
        name: `Falooda ${flavors[i-1] || `Special ${i}`}`,
        category: 'Falooda',
        image: `/images/products/falooda/${i}.png`,
        description: `Premium falooda with ${(flavors[i-1] || `special flavor ${i}`).toLowerCase()}`
      });
    }
    
    return products;
  };
  
  const allProducts = generateProducts();

  // Filter products based on active filter
  const filteredProducts = activeFilter === "Show All" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Products" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-wide">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Products</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-800 mb-4" style={{ fontFamily: 'cursive' }}>
            Dwink Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of premium beverages made with natural ingredients from Vietnam. 
            From fresh fruit juices to energy drinks, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-800 text-center mb-6 md:mb-12">
            DWINK BEVERAGE PRODUCTS
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded transition-all duration-300 text-sm font-medium ${
                  activeFilter === category 
                    ? 'bg-red-600 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
              {activeFilter !== "Show All" && (
                <span className="ml-2 text-red-600 font-medium">in {activeFilter}</span>
              )}
            </p>
          </div>

          {/* Product Grid - Responsive horizontal layout */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-10">
            {currentProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="card-hover overflow-hidden">
                  <div className="w-full h-20 md:h-32 lg:h-48 overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-1 md:p-2 lg:p-4">
                    <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors font-body">{product.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 font-body hidden md:block">{product.category}</p>
                    <p className="text-xs text-gray-500 line-clamp-2 font-body hidden lg:block">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const isCurrentPage = page === currentPage;
                  const isNearCurrent = Math.abs(page - currentPage) <= 2;
                  
                  if (!isNearCurrent && page !== 1 && page !== totalPages) {
                    return page === 2 || page === totalPages - 1 ? (
                      <span key={page} className="px-3 py-2 text-gray-400">...</span>
                    ) : null;
                  }
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 ${
                        isCurrentPage 
                          ? 'bg-red-600 text-white shadow-lg transform scale-110' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Interested in Our Products?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for samples, pricing, or custom manufacturing solutions. 
            We&apos;re here to help you find the perfect beverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Request Samples
            </Link>
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 bg-blue-200">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-800 mb-2">WHY CHOOSE US</h2>
            <p className="text-sm text-blue-700">The Leading Premium Beverage Manufacturer and Supplier Vietnam</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { title: "FREE SAMPLE", icon: "📦" },
              { title: "OEM and ODM", icon: "⚙️" },
              { title: "FREE LABEL DESIGN", icon: "🎨" },
              { title: "SMALL MOQ", icon: "📊" },
              { title: "STABLE QUALITY", icon: "💎" },
              { title: "FAST DELIVERY", icon: "🚚" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <span className="text-sm md:text-lg">{feature.icon}</span>
                </div>
                <h3 className="text-xs md:text-sm font-bold text-blue-800 uppercase">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 bg-white border-none">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-rita-red mb-4">CERTIFICATIONS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and safety through internationally recognized certifications.
            </p>
          </div>

          {/* Certification Logos */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {[
              { name: "HACCP", logo: "/images/certifications/haccp.png" },
              { name: "ISO 22000", logo: "/images/certifications/iso.png" },
              { name: "HALAL", logo: "/images/certifications/halal.png" },
              { name: "ORGANIC", logo: "/images/certifications/organic.png" },
              { name: "KOSHER", logo: "/images/certifications/kosher.png" },
              { name: "FDA", logo: "/images/certifications/fda.png" }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-2 md:p-4 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-w-0">
                <div className="h-8 w-8 md:h-12 md:w-12 mb-1 md:mb-2 flex items-center justify-center">
                  <div className="text-sm md:text-lg text-gray-400">Logo</div>
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-800">{cert.name}</div>
              </div>
            ))}
          </div>

          {/* Certificate Images (Rita Certificates) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO 22000 Certificate', image: '/images/certificates/iso-certificate.jpg' },
              { title: 'HACCP Certificate', image: '/images/certificates/haccp-certificate.jpg' },
              { title: 'HALAL Certificate', image: '/images/certificates/halal-certificate.jpg' },
              { title: 'ORGANIC Certificate', image: '/images/certificates/organic-certificate.jpg' },
              { title: 'KOSHER Certificate', image: '/images/certificates/kosher-certificate.jpg' },
              { title: 'FDA Certificate', image: '/images/certificates/fda-certificate.jpg' }
            ].slice(0, 3).map((doc, i) => (
              <div key={i} className="card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-xl text-gray-400">Certificate Image</div>
                </div>
                <div className="p-4 flex items-center justify-between bg-white">
                  <div className="font-semibold text-gray-900 font-body">{doc.title}</div>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition-colors">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/logodwink.png"
              alt="Dwink Logo"
              width={150}
              height={75}
              className="h-16 w-auto mb-2"
            />
            <h3 className="text-xl font-bold">DWINK FOOD AND DRINK CO.,LTD</h3>
          </div>
          
          <div className="text-sm mb-4">
            <p className="mb-2">Add: No. 8, Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An Ward, Ho Chi Minh City, Vietnam.</p>
            <div className="flex justify-center space-x-6 mb-2">
              <span>Office: (84)274 3784 688</span>
              <span>Sales: (84)274 3784 788</span>
              <span>Fax: (84)274 3784 799</span>
              <span>Tax Code: 3700574950</span>
            </div>
            <div className="flex justify-center space-x-6">
              <span>Email: marketing@dwink.com.vn</span>
              <span>Website: https://dwink.com.vn</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 mb-6">
            <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">in</span>
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">X</span>
            </a>
            <a href="#" className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </a>
            <a href="#" className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">YT</span>
            </a>
            <a href="#" className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">TT</span>
            </a>
          </div>

          {/* QR Codes */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
              <div className="text-black text-xs text-center font-bold">QR</div>
            </div>
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
              <div className="text-black text-xs text-center font-bold">QR</div>
            </div>
          </div>

          <div className="border-t border-red-500 pt-4 text-xs">
            <p className="mb-2">DWINK Food & Drink Co.,Ltd. 2004 - 2023. All Rights Reserved Development by DWINK Beverage Company</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-red-200">About us</a>
              <span>|</span>
              <a href="#" className="hover:text-red-200">Contact us</a>
              <span>|</span>
              <a href="#" className="hover:text-red-200">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-red-200">Terms of Service Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
