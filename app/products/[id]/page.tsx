import Image from "next/image";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { products, getProductById, logo } from "../../../app/assets/products";

export async function generateStaticParams() {
  const { products } = await import('../../../app/assets/products');
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const currentProduct = getProductById(resolvedParams.id);
  
  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const product = {
    ...currentProduct,
    brand: "Dwink",
    volume: "300ml",
    packing: "24 pieces per carton packing",
    shelfLife: "12 months",
    moq: "Negotiable based on requirements",
    paymentTerm: "As per mutual agreement",
    deliveryTime: "Subject to order specifications",
    certifications: ["ISO", "HACCP", "HALAL", "FDA", "GMP", "KOSHER", "BRC", "FSSC 22000"],
    gallery: [
      currentProduct.image,
      products[Math.min(parseInt(resolvedParams.id), products.length - 1)]?.image || currentProduct.image,
      products[Math.min(parseInt(resolvedParams.id) + 1, products.length - 1)]?.image || currentProduct.image
    ]
  };

  const relatedProducts = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 6);

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
      <section className="relative h-32 md:h-40 w-full bg-gradient-to-r from-slate-500 to-teal-500 flex items-center justify-center">
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
                <p className="text-2xl text-teal-600 font-semibold mb-4">Vitamin E 1L</p>
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
                    <span key={index} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-teal-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center space-x-2 text-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>CONTACT US</span>
                  </button>
                </Link>
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
                    className="w-full h-28 md:h-32 lg:h-48 object-cover mb-1 md:mb-3"
                  />
                  <h3 className="text-xs md:text-sm text-gray-700 leading-tight px-1">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Comment Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">GET IN TOUCH</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about this product? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>CONTACT US FOR THIS PRODUCT</span>
                </button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Click above to send us a detailed inquiry about this product
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-slate-100 text-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-4">
            <Image
              src={logo}
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
              <span>Email: info@dwink.pk</span>
              <span>Website: https://dwink.com.vn</span>
            </div>
            <div className="flex justify-center">
              <span>PO Box: 13002</span>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-4 text-xs">
            <p className="mb-2">DWINK Food & Drink Co.,Ltd. 2004 - 2023. All Rights Reserved Development by DWINK Beverage Company</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-teal-600">About us</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-600">Contact us</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-600">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-600">Terms of Service Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
