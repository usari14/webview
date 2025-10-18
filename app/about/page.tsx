'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About Us" />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="About Rita Company"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'cursive' }}>
                  About Our Company
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
                  Rita Company Overview & Trusted Development
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-8">
                  Leading beverage manufacturer and exporter from Vietnam
                </p>
              </div>

              {/* Right Side - Company Building */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white/20">
                    <Image 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                      alt="Rita Company Building"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rita Logo Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-6">
                      <div className="text-3xl font-bold text-red-600" style={{ fontFamily: 'cursive' }}>
                        Rita
                      </div>
                      <div className="text-sm text-green-600 text-center">Good Taste - Good Health</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-wide">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Overview RITA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Rita Food and Drink Co., Ltd. is a leading beverage manufacturer and exporter based in Vietnam. 
                  Established with a vision to provide high-quality, natural beverages to customers worldwide, 
                  we have grown into one of the most trusted names in the industry.
                </p>
                <p>
                  Our company specializes in the production of various beverage categories including coconut water, 
                  fruit juices, tea drinks, energy drinks, and functional beverages. We are committed to using 
                  only the finest natural ingredients sourced from Vietnam&apos;s rich agricultural landscape.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a team of experienced professionals, 
                  we ensure that every product meets the highest international quality standards. Our 
                  production capacity allows us to serve both domestic and international markets effectively.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop"
                    alt="Rita Products Display"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International B2B Supplier Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International B2B Supplier</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To know well our products, get some samples to try, and it&apos;s free.
            </p>
          </div>

          {/* B2B Visual */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Smartphone */}
                <div className="text-center">
                  <div className="w-32 h-48 bg-gray-800 rounded-2xl mx-auto mb-4 relative">
                    <div className="absolute inset-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Business Meeting</div>
                </div>

                {/* B2B Text */}
                <div className="text-center">
                  <div className="text-8xl font-bold text-blue-600 mb-4">B2B</div>
                  <div className="text-lg text-gray-700">International Supplier</div>
                </div>

                {/* Cargo Ship */}
                <div className="text-center">
                  <div className="w-48 h-24 bg-red-500 rounded-lg mx-auto mb-4 relative">
                    <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    </div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-red-500"></div>
                  </div>
                  <div className="text-sm text-gray-600">Cargo Ship with Containers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20 PRODUCTION LINES</h3>
              <p className="text-gray-600">State-of-the-art manufacturing facilities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">400 CONTAINERS PER MONTH</h3>
              <p className="text-gray-600">High production capacity</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200 COUNTRIES WE EXPORT</h3>
              <p className="text-gray-600">Global reach and presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Company Timeline</h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2004 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2004</h3>
                    <p className="text-gray-700">Company founded with vision to provide natural beverages</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2005 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2005</h3>
                    <p className="text-gray-700">First production line established</p>
                  </div>
                </div>
              </div>

              {/* 2010 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2010</h3>
                    <p className="text-gray-700">International expansion begins</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2015 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2015</h3>
                    <p className="text-gray-700">Advanced technology implementation</p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2022</h3>
                    <p className="text-gray-700">Leading position in Vietnam beverage industry</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Technology Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">35.000 M²</h2>
                <p className="text-xl text-gray-600 mb-6">Inside factory</p>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                    alt="Rita Factory Interior"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">NEW technology</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                    alt="Modern Technology"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">MOST ADVANCED</h2>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
                      alt="Raw materials"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Raw materials</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop"
                      alt="Automatic aseptic filling"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Automatic aseptic filling</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop"
                      alt="Modern production line"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Modern production line</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop"
                      alt="Warehouse"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Warehouse</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop"
                      alt="Lab room"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Lab room</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop"
                      alt="Quality control"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Quality control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Description */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR RAW MATERIALS</h3>
                <p className="text-gray-600">
                  We source the finest natural ingredients from Vietnam&apos;s rich agricultural regions, 
                  ensuring the highest quality and freshness in every product.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR FACTORY & SUPPLY</h3>
                <p className="text-gray-600">
                  Our state-of-the-art manufacturing facility spans 35,000 square meters with 
                  20 production lines and advanced quality control systems.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR PARTNERS AND DISTRIBUTION SYSTEM</h3>
                <p className="text-gray-600">
                  We maintain strong partnerships with distributors and retailers across 
                  200 countries, ensuring reliable global supply chain management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The international approval of USDA is available.</h2>
            <p className="text-lg text-gray-600">Our certifications ensure the highest quality and safety standards</p>
          </div>

          {/* Certification Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {[
              "HACCP", "ISO", "HALAL", "USDA ORGANIC", "GMP", "BRC FOOD", "FSSC 22000", "FDA"
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-bold text-gray-800">{cert}</div>
              </div>
            ))}
          </div>

          {/* Certificate Documents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">Certificate 1</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">Certificate 2</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">Certificate 3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rita Advantages Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Rita Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Free Sample", icon: "📦", description: "Free samples available for testing" },
              { title: "OEM/ODM", icon: "🏭", description: "Custom manufacturing services" },
              { title: "Excellent R&D Team", icon: "👥", description: "Innovative product development" },
              { title: "Stable Quality", icon: "👑", description: "Consistent quality assurance" },
              { title: "Fast Delivery", icon: "🚚", description: "Quick and reliable shipping" },
              { title: "After-Sale", icon: "🎧", description: "Comprehensive customer support" },
            ].map((advantage, index) => (
              <div key={index} className="bg-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Exhibitions & Customer</h2>
          
          {/* Exhibition Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              "Africa's BIG 7", "Anuga", "Gulfood", "FHC Food & Hotel China", 
              "THAIFEX Anuga Asia", "Vietfood & Beverage", "SIAL Interfood"
            ].map((exhibition, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-sm font-medium text-gray-800">{exhibition}</div>
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

            {/* Social Media */}
            <div className="flex flex-col items-end">
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">yt</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">ig</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">tt</span>
                </div>
              </div>
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="text-red-600 text-xs text-center">QR<br/>CODE</div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-8 pt-8 text-center text-sm">
            <p>Copyright © 2023 Rita Food and Drink Co., Ltd. All rights reserved.</p>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
