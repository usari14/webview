'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navigation from "../components/Navigation";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = [
    "Falooda", "Seed", "Nata de Coco", "Show All"
  ];

  const carouselItems = [
    { title: "Rita Iced Coffee", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop" },
    { title: "Lemon Sparkling", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
    { title: "Mango Drink", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop" },
    { title: "Bubble Tea", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop" },
    { title: "Orange Juice", image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400&h=300&fit=crop" },
    { title: "Coconut Water", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c76b1?w=400&h=300&fit=crop" },
    { title: "Green Tea", image: "https://images.unsplash.com/photo-1541976076image.pngimage.png758-347942db1972?w=400&h=300&fit=crop" },
    { title: "Energy Drink", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [carouselItems.length]);
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Home" />

      {/* Hero Section - Large Banner Image */}
      <section className="relative h-64 md:h-96 lg:h-screen w-full overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2024/04/19/12/27/ai-generated-8706248_1280.jpg"
          alt="Natural Vietnamese Beverages"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-green-600 text-center mb-6 md:mb-12">
            CATEGORIES
          </h2>

          <div className="flex justify-center gap-4 md:gap-8 lg:gap-16">
            {[
              { name: "FALOODA", image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=300&fit=crop", bgColor: "bg-yellow-200" },
              { name: "SEED", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=300&h=300&fit=crop", bgColor: "bg-green-200" },
              { name: "NATA DE COCO", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=300&fit=crop", bgColor: "bg-teal-200" },
            ].map((category, index) => (
              <Link key={index} href={`/products?filter=${encodeURIComponent(category.name)}`} className="flex flex-col items-center group flex-shrink-0">
                <div className={`w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 ${category.bgColor} rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-105 transition-transform overflow-hidden`}>
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs md:text-sm lg:text-lg font-bold text-gray-700 text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beverage Products Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-600 text-center mb-4 md:mb-8">
            BEVERAGE PRODUCTS
          </h2>



          {/* Hot Products */}
          {/* <div className="max-w-4xl mx-auto mb-6">
            <span className="text-sm font-medium mr-4">Hot products:</span>
            <div className="inline-flex flex-wrap gap-2 text-sm">
              {["coconut water with pulp", "popping boba", "bbt bbt", "juice with pulp", "ice coffee", "nata de coco", "protein milk", "prebiotic"].map((item, i) => (
                <span key={i} className="text-red-600 hover:underline cursor-pointer">{item}</span>
              ))}
              <span className="text-red-600 hover:underline cursor-pointer">show all »</span>
            </div>
          </div> */}

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded transition-colors text-sm font-medium ${activeFilter === category
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6 mb-10">
            {[
              { name: "Rose Falooda", category: "Falooda", image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=300&fit=crop" },
              { name: "Mango Falooda", category: "Falooda", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop" },
              { name: "Kulfi Falooda", category: "Falooda", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=300&fit=crop" },
              { name: "Basil Seeds", category: "Seed", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=300&h=300&fit=crop" },
              { name: "Chia Seeds", category: "Seed", image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=300&h=300&fit=crop" },
              { name: "Flax Seeds", category: "Seed", image: "https://images.unsplash.com/photo-1611071536243-eaf7a7ec3344?w=300&h=300&fit=crop" },
              { name: "Original Nata de Coco", category: "Nata de Coco", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=300&fit=crop" },
              { name: "Strawberry Nata de Coco", category: "Nata de Coco", image: "https://images.unsplash.com/photo-1488551511020-571c741f122a?w=300&h=300&fit=crop" },
            ].filter(product => activeFilter === "Show All" || product.category === activeFilter).map((product, index) => (
              <Link key={index} href={`/products/${index + 1}`} className="block">
                <div className="bg-white border rounded-lg pb-2 md:pb-4 hover:shadow-lg transition-shadow text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-20 md:h-32 lg:h-48 object-cover mb-1 md:mb-3"
                  />
                  <h3 className="text-xs md:text-sm text-gray-700 leading-tight px-1">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="section-divider fancy"></div> */}

      {/* Carousel Section */}
      <section className="py-8 md:py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide % carouselItems.length) * (100 / 3)}%)` }}
              >
                {[...carouselItems, ...carouselItems].map((item, index) => (
                  <div key={index} className="w-1/3 md:w-1/4 lg:w-1/6 flex-shrink-0 px-1 md:px-3">
                    <div className="bg-white border rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow text-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="w-full h-20 md:h-32 lg:h-48 object-cover mb-1 md:mb-3"
                      />
                      <h3 className="text-xs md:text-sm text-gray-700 leading-tight">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* <div className="section-divider"></div> */}

      {/* Good Taste - Good Health Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="white" opacity="0.5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-4 section-heading" style={{ fontFamily: 'cursive' }}>
            Rita
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4 md:mb-6 section-heading">Good Taste - Good Health</h3>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Always make the best tropical juice and drink
          </p>

          {/* Floating Fruits */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-14 h-14 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-10 w-10 h-10 bg-red-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1500"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-200">
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

      {/* Company Strengths Section */}
      <section className="py-8 bg-white border-none">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Excellent Products */}
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-4xl font-bold text-red-600 mb-6">EXCELLENT PRODUCTS</div>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
                <div className="text-gray-500">Product Image</div>
              </div>
              <p className="text-gray-600">
                Our commitment to excellence ensures every product meets the highest standards of quality, taste, and nutrition.
              </p>
            </div>

            {/* Raw Materials Supply */}
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-4xl font-bold text-rita-red mb-6">OUR RAW MATERIALS</div>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
                <div className="text-gray-500">Raw Materials Image</div>
              </div>
              <p className="text-gray-600">
                We source the finest raw materials from trusted suppliers to ensure the best quality ingredients in every product.
              </p>
            </div>

            {/* Partner and Distribution */}
            <div className="text-center">
              <div className="text-xl md:text-2xl lg:text-4xl font-bold text-rita-red mb-6">DISTRIBUTION</div>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
                <div className="text-gray-500">Distribution Map</div>
              </div>
              <p className="text-gray-600">
                Our extensive distribution network ensures your products reach customers worldwide efficiently and reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container-wide text-center">
          <h3 className="text-2xl font-bold mb-4">RITA FOOD AND DRINK CO.,LTD</h3>
          
          <div className="text-sm mb-4">
            <p className="mb-2">Add: No. 8, Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An Ward, Ho Chi Minh City, Vietnam.</p>
            <div className="flex justify-center space-x-6 mb-2">
              <span>Office: (84)274 3784 688</span>
              <span>Sales: (84)274 3784 788</span>
              <span>Fax: (84)274 3784 799</span>
              <span>Tax Code: 3700574950</span>
            </div>
            <div className="flex justify-center space-x-6">
              <span>Email: marketing@rita.com.vn</span>
              <span>Website: https://rita.com.vn</span>
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
            <p className="mb-2">RITA Food & Drink Co.,Ltd. 2004 - 2023. All Rights Reserved Development by RITA Beverage Company</p>
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