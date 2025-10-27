import Image from "next/image";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { getImagePath } from "../../../lib/utils";

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const product = {
    id: resolvedParams.id,
    name: "Orange Carrot Juice Blend Drink",
    brand: "Dwink",
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
    image: getImagePath("/images/all-products/1.png"),
    gallery: [
      getImagePath("/images/all-products/1.png"),
      getImagePath("/images/all-products/2.png"),
      getImagePath("/images/all-products/3.png")
    ]
  };

  const relatedProducts = [
    { id: "1", name: "Basil Seed Strawberry", image: getImagePath("/images/all-products/2.png"), category: "Seed Drink" },
    { id: "2", name: "Nata de Coco Original", image: getImagePath("/images/all-products/21.png"), category: "Nata de Coco" },
    { id: "3", name: "Falooda Original", image: getImagePath("/images/all-products/41.png"), category: "Falooda" },
    { id: "4", name: "Basil Seed Mango", image: getImagePath("/images/all-products/3.png"), category: "Seed Drink" },
    { id: "5", name: "Nata de Coco Strawberry", image: getImagePath("/images/all-products/22.png"), category: "Nata de Coco" },
    { id: "6", name: "Falooda Strawberry", image: getImagePath("/images/all-products/42.png"), category: "Falooda" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Product Details" />

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

      {/* Small Hero Banner Section */}
      <section className="relative h-32 md:h-40 w-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg md:text-xl">Premium Dwink Product</p>
        </div>
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
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-8">PRODUCT DESCRIPTION</h2>
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
                  src={getImagePath("/images/all-products/4.png")}
                  alt="Dwink Product Showcase"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-8">BENEFITS OF ORANGE CARROT JUICE</h2>
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-8">WHAT MAKES OUR ORANGE CARROT JUICE SPECIAL?</h2>
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
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-8 text-center">CHARM, FLAVOUR, WHAT IS GOOD OR TO SELL?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our Orange Carrot Juice Blend offers a unique taste experience that combines the refreshing citrus notes of orange with the subtle sweetness of carrots. The flavor profile is carefully balanced to appeal to both children and adults, making it an excellent choice for family consumption.
              </p>
              <p>
                The drink has a smooth, velvety texture with a natural orange color that&apos;s visually appealing. The taste is neither too sweet nor too tart, providing a perfect balance that keeps customers coming back for more.
              </p>
              <p>
                From a market perspective, this product caters to the growing demand for healthy, natural beverages. It&apos;s perfect for health-conscious consumers, fitness enthusiasts, and anyone looking for a nutritious alternative to sugary soft drinks.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src={getImagePath("/images/all-products/5.png")}
                  alt="Fresh Dwink Product"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Services Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-8 text-center">OEM SERVICES - OWN BRAND, PRIVATE LABEL, AND EXPORT SUPPORT</h2>
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
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-12 text-center">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
            {relatedProducts.slice(0, 6).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="block">
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
            <div className="flex justify-center mb-6">
              <Image
                src={getImagePath("/images/logos/mainlogo.png")}
                alt="Dwink Logo"
                width={200}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-red-600 mb-4">CERTIFICATIONS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and safety through internationally recognized certifications.
            </p>
          </div>

          {/* Certification Logos */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {[
              { name: "ISO 22000", image: getImagePath('/images/certificates/iso 22000.jpg') },
              { name: "INTERNATIONAL HALAL", image: getImagePath('/images/certificates/international hala.jpeg') },
              { name: "SINDH FOOD AUTHORITY", image: getImagePath('/images/certificates/sindh food authority.png') }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-2 md:p-4 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-w-0">
                <div className="h-8 w-8 md:h-12 md:w-12 mb-1 md:mb-2 flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-800">{cert.name}</div>
              </div>
            ))}
          </div>

          {/* Certificate Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO 22000 Certificate', image: getImagePath('/images/certificates/iso 22000.jpg') },
              { title: 'International Halal Certificate', image: getImagePath('/images/certificates/international hala.jpeg') },
              { title: 'Sindh Food Authority Certificate', image: getImagePath('/images/certificates/sindh food authority.png') }
            ].map((doc, i) => (
              <div key={i} className="card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-56 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    width={300}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 flex items-center justify-between bg-white">
                  <div className="font-semibold text-gray-900 font-body text-sm">{doc.title}</div>
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
              src={getImagePath("/images/logos/mainlogo.png")}
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
