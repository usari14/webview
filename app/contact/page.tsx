'use client';

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
                  <Link href="/products" className="text-gray-900 hover:text-red-600 font-bold uppercase flex items-center transition-colors">
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
                  <Link href="/news" className="text-gray-900 hover:text-red-600 font-bold uppercase flex items-center transition-colors">
                    NEWS
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
                <Link href="/contact" className="text-red-600 font-bold uppercase transition-colors">CONTACT US</Link>
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
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Map</h1>
            <p className="text-xl text-gray-600">Visit our headquarters in Vietnam</p>
          </div>
          
          {/* Map Container */}
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg animate-scaleIn">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Rita Food and Drink Co., Ltd</h3>
                <p className="text-sm text-gray-600">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fadeInLeft">
              <h4 className="font-semibold text-gray-900 mb-2">Rita Food and Drink Co., Ltd</h4>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.0 (52 reviews)</span>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">View larger map</a>
            </div>
          </div>

          {/* Map Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50 transition-colors hover-lift">
              Zoom In
            </button>
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50 transition-colors hover-lift">
              Street View
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">CONTACT US</h2>
            <p className="text-gray-600 text-lg">- Keep up to date with us -</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Information */}
            <div className="space-y-6 animate-fadeInLeft">
              <div className="flex items-center space-x-3">
                <div className="text-3xl font-bold text-red-600" style={{ fontFamily: 'cursive' }}>
                  Rita
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <h3 className="font-bold text-gray-900 uppercase">RITA FOOD AND DRINK CO.,LTD</h3>
                
                <div>
                  <p className="font-medium text-gray-700">Address:</p>
                  <p className="text-gray-600">No. 08, Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An Ward, Ho Chi Minh City, Vietnam</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Phone:</p>
                  <p className="text-gray-600">(+84) 274 3784 688 (Office)</p>
                  <p className="text-gray-600">(+84) 274 3784 788 (Sales)</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Email:</p>
                  <p className="text-gray-600">marketing@rita.com.vn</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Fax:</p>
                  <p className="text-gray-600">(+84) 274 3784 788</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Website:</p>
                  <p className="text-gray-600">www.rita.com.vn</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={1000}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {1000 - formData.message.length} characters left
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  SEND EMAIL
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">RITA FOOD AND DRINK CO.,LTD</h3>
              <div className="space-y-2 text-sm">
                <p>Add: No. 8, Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An Ward, Ho Chi Minh City, Vietnam.</p>
                <p>Office:(84)274 3784 688 Sales: (84)274 3784 788 Fax: (84)274 3784 799 Tax Code: 3700574950</p>
                <p>Email: marketing@rita.com.vn Website: https://rita.com.vn</p>
              </div>
            </div>

            {/* Social Media & QR Code */}
            <div className="flex flex-col items-end">
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">X</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">P</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">♫</span>
                </div>
              </div>
              
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-red-600 text-xs text-center">QR<br/>CODE</div>
              </div>

              <div className="bg-white rounded p-2">
                <div className="text-red-600 text-xs font-bold">Alibaba.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-8 pt-8">
            <div className="text-center text-sm mb-4">
              <p>RITA Food & Drink Co., Ltd. 2004 - 2023. All Rights Reserved Development by RITA Beverage Company</p>
            </div>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="hover:text-red-200 transition-colors">About us</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Contact us</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Terms of Service Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
