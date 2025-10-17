'use client';

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  // Handle async params
  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const product = {
    id: resolvedParams.id,
    name: "Orange Carrot Juice Blend Drink",
    brand: "Rita",
    volume: "1L",
    packing: "12 bottles/carton",
    shelfLife: "12 months",
    ingredients: "Water, Orange Juice, Carrot Juice, Sugar, Vitamin E, Natural Flavors, Citric Acid",
    storage: "Cool, dry place",
    usage: "Drink directly",
    moq: "1 container",
    paymentTerm: "T/T, L/C",
    deliveryTime: "20-25 days",
    certifications: ["ISO", "HACCP", "HALAL", "FDA", "GMP", "KOSHER", "BRC", "FSSC 22000"],
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
    ]
  };

  const relatedProducts = [
    { id: "1", name: "Kale Juice Blend", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", category: "Fresh Fruit Juice" },
    { id: "2", name: "Coconut Water", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", category: "Coconut Products" },
    { id: "3", name: "Matcha Tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop", category: "Tea Drink" },
    { id: "4", name: "Protein Milk Shake", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=300&h=300&fit=crop", category: "Protein Milk Shake" },
    { id: "5", name: "Sparkling Apple", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop", category: "Sparkling Drink" },
    { id: "6", name: "Bubble Tea", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop", category: "Bubble Tea" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Utility Bar */}
        <div className="bg-blue-50 border-b border-gray-200">
          <div className="container-wide">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="text-red-600 font-medium">Contact Us</div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Exhibition</a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Video</a>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="relative">
                  <select className="bg-transparent text-gray-700 hover:text-red-600 transition-colors border-none outline-none cursor-pointer">
                    <option>Choose</option>
                    <option>English</option>
                    <option>Vietnamese</option>
                  </select>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-transparent border-none outline-none text-gray-500 placeholder-gray-400 text-sm"
                  />
                  <button className="bg-red-600 text-white p-1 rounded hover:bg-red-700 transition-colors ml-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white shadow-sm">
          <div className="container-wide">
            <div className="flex items-center justify-between h-20">
              {/* Left Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-gray-900 hover:text-red-600 font-bold uppercase transition-colors">HOME</Link>
                <Link href="/about" className="text-gray-900 hover:text-red-600 font-bold uppercase transition-colors">ABOUT US</Link>
                <div className="relative group">
                  <Link href="/products" className="text-red-600 font-bold uppercase flex items-center transition-colors">
                    PRODUCTS
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </nav>

              {/* Center Logo */}
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-red-600 mb-1" style={{ fontFamily: 'cursive' }}>
                  Rita
                  <span className="text-xs text-red-600 ml-1">®</span>
                </div>
                <div className="text-sm text-red-600 font-medium">Good Taste - Good Health</div>
              </div>

              {/* Right Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/products?filter=New Products" className="text-gray-900 hover:text-red-600 font-bold uppercase transition-colors">NEW PRODUCTS</Link>
                <div className="relative group">
                  <a href="/news" className="text-gray-900 hover:text-red-600 font-bold uppercase flex items-center transition-colors">
                    NEWS
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <Link href="/contact" className="text-gray-900 hover:text-red-600 font-bold uppercase transition-colors">CONTACT US</Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button className="text-gray-600 hover:text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-wide">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-red-600">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2024/04/19/12/27/ai-generated-8706248_1280.jpg"
          alt="Natural Vietnamese Beverages"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Product Detail Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-2xl text-green-600 font-semibold mb-4">Vitamin E 1L</p>
              </div>

              {/* Product Specifications Table */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Product Name:</span>
                    <span className="text-gray-900">{product.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Brand:</span>
                    <span className="text-gray-900">{product.brand}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Volume:</span>
                    <span className="text-gray-900">{product.volume}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Packing:</span>
                    <span className="text-gray-900">{product.packing}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Shelf Life:</span>
                    <span className="text-gray-900">{product.shelfLife}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Ingredients:</span>
                    <span className="text-gray-900 text-right max-w-xs">{product.ingredients}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Storage:</span>
                    <span className="text-gray-900">{product.storage}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Usage:</span>
                    <span className="text-gray-900">{product.usage}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">MOQ:</span>
                    <span className="text-gray-900">{product.moq}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Payment Term:</span>
                    <span className="text-gray-900">{product.paymentTerm}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Delivery Time:</span>
                    <span className="text-gray-900">{product.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
                  </svg>
                  <span>ADD TO CART</span>
                </button>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>CONTACT US</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8">PRODUCT DESCRIPTION</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our Orange Carrot Juice Blend Drink is a refreshing and nutritious beverage that combines the natural sweetness of oranges with the earthy goodness of carrots. This vitamin E-enriched drink is perfect for health-conscious consumers who want to enjoy a delicious beverage while getting essential nutrients.
                </p>
                <p>
                  Made with premium quality ingredients, our juice blend maintains the authentic taste of fresh fruits while ensuring a long shelf life. The natural orange and carrot flavors create a unique taste profile that appeals to all age groups.
                </p>
                <p>
                  This product is manufactured in our state-of-the-art facility following strict quality control measures. We use only the finest ingredients and maintain the highest standards of hygiene and safety throughout the production process.
                </p>
              </div>
            </div>
            
            {/* Visual Showcase */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=600&fit=crop"
                  alt="Orange Carrot Juice Showcase"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8">BENEFITS OF ORANGE CARROT JUICE</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Boosts Immunity:</strong> Rich in Vitamin C and antioxidants that strengthen your immune system</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Improves Vision:</strong> High in beta-carotene which converts to Vitamin A for eye health</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Skin Health:</strong> Vitamin E helps maintain healthy, glowing skin</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Natural Energy:</strong> Provides natural sugars for sustained energy without artificial additives</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-8">WHAT MAKES OUR ORANGE CARROT JUICE SPECIAL?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Natural Ingredients:</strong> Made with 100% natural orange and carrot juice concentrates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>No Artificial Colors:</strong> Natural color from fruits, no artificial dyes or preservatives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>High Vitamin Content:</strong> Enriched with Vitamin E for additional health benefits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><strong>Premium Quality:</strong> Manufactured under strict quality control standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taste and Market Appeal Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">CHARM, FLAVOUR, WHAT IS GOOD OR TO SELL?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our Orange Carrot Juice Blend offers a unique taste experience that combines the refreshing citrus notes of orange with the subtle sweetness of carrots. The flavor profile is carefully balanced to appeal to both children and adults, making it an excellent choice for family consumption.
              </p>
              <p>
                The drink has a smooth, velvety texture with a natural orange color that's visually appealing. The taste is neither too sweet nor too tart, providing a perfect balance that keeps customers coming back for more.
              </p>
              <p>
                From a market perspective, this product caters to the growing demand for healthy, natural beverages. It's perfect for health-conscious consumers, fitness enthusiasts, and anyone looking for a nutritious alternative to sugary soft drinks.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                  alt="Fresh Orange Carrot Juice"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Services Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">OEM SERVICES - OWN BRAND, PRIVATE LABEL, AND EXPORT SUPPORT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Private Label Manufacturing</h3>
              <p className="text-gray-600">We offer complete private label services, allowing you to create your own brand with our high-quality products. From formulation to packaging, we handle everything.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Export Support</h3>
              <p className="text-gray-600">Our experienced team provides comprehensive export support including documentation, customs clearance, and logistics management for international markets.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">All our products undergo rigorous quality testing and are certified by international standards. We maintain the highest quality standards for all our OEM products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="block">
                <div className="bg-white border rounded-lg pb-4 hover:shadow-lg transition-shadow text-center">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={250}
                    className="w-full h-72 object-cover mb-3"
                  />
                  <h3 className="text-sm text-gray-700 leading-tight">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comment Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">LEAVE A COMMENT</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-200">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-2">WHY CHOOSE US</h2>
            <p className="text-sm text-blue-700">The Leading Premium Beverage Manufacturer and Supplier Vietnam</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { title: "FREE SAMPLE", icon: "📦" },
              { title: "OEM and ODM", icon: "⚙️" },
              { title: "FREE LABEL DESIGN", icon: "🎨" },
              { title: "SMALL MOQ", icon: "📊" },
              { title: "STABLE QUALITY", icon: "💎" },
              { title: "FAST DELIVERY", icon: "🚚" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-blue-800 uppercase">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white border-none">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-rita-red mb-4">CERTIFICATIONS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and safety through internationally recognized certifications.
            </p>
          </div>

          {/* Certification Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {[
              { name: "HACCP", logo: "/images/certifications/haccp.png" },
              { name: "ISO 22000", logo: "/images/certifications/iso.png" },
              { name: "HALAL", logo: "/images/certifications/halal.png" },
              { name: "ORGANIC", logo: "/images/certifications/organic.png" },
              { name: "KOSHER", logo: "/images/certifications/kosher.png" },
              { name: "FDA", logo: "/images/certifications/fda.png" }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center">
                <div className="h-16 w-16 mb-3 flex items-center justify-center">
                  <div className="text-3xl text-gray-400">Logo</div>
                </div>
                <div className="text-lg font-bold text-gray-800">{cert.name}</div>
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
      <footer className="bg-red-600 text-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div>
              <h3 className="text-2xl font-bold mb-4">RITA FOOD AND DRINK CO.,LTD</h3>
              <div className="space-y-2 text-sm">
                <p>No. 8, Thong Nhat Boulevard, Song Than 2 Industrial Park</p>
                <p>Di An Ward, Di An City, Binh Duong Province, Vietnam</p>
                <p>Phone: +84 123 456 789</p>
                <p>Fax: +84 123 456 790</p>
                <p>Email: info@rita.com.vn</p>
                <p>Website: www.rita.com.vn</p>
              </div>
            </div>

            {/* Social Media & Payment */}
            <div className="flex flex-col items-end">
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">yt</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">ig</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">tw</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">pt</span>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="flex space-x-2 mb-6">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">MC</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">AMEX</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">PP</span>
                </div>
              </div>

              <div className="text-sm text-right">
                <p>Copyright © 2023 Rita Food and Drink Co., Ltd.</p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-8 pt-8 flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
