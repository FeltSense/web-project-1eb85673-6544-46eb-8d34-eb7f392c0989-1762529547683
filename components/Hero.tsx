export default function Hero() {
  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden">
  {/* Background Grid of Property Images */}
  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 opacity-20">
    <div className="col-span-2 row-span-2 bg-slate-300"></div>
    <div className="col-span-1 row-span-1 bg-slate-200"></div>
    <div className="col-span-2 row-span-2 bg-slate-300"></div>
    <div className="col-span-1 row-span-1 bg-slate-200"></div>
    <div className="col-span-1 row-span-1 bg-slate-200"></div>
    <div className="col-span-2 row-span-1 bg-slate-300"></div>
    <div className="col-span-1 row-span-2 bg-slate-200"></div>
    <div className="col-span-2 row-span-1 bg-slate-300"></div>
    <div className="col-span-3 row-span-2 bg-slate-300"></div>
    <div className="col-span-2 row-span-1 bg-slate-200"></div>
    <div className="col-span-1 row-span-1 bg-slate-200"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="relative z-10">
        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
          <span className="text-sm font-medium text-slate-700">Premium Luxury Real Estate</span>
        </div>
        
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Exclusive Access to the World's Most Prestigious Properties
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Discover exceptional luxury homes and investment opportunities with expert guidance from our seasoned agents who possess unparalleled market knowledge and connections.
        </p>

        {/* Value Props */}
        <div className="space-y-4 mb-10">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Exclusive Property Portfolio</h3>
              <p className="text-slate-600 text-sm">Access off-market listings and premium luxury properties before they hit the public market</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Expert Market Intelligence</h3>
              <p className="text-slate-600 text-sm">Leverage deep market insights from agents with decades of luxury real estate experience</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Personalized Property Matching</h3>
              <p className="text-slate-600 text-sm">Tailored property recommendations based on your unique lifestyle and investment criteria</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
            View Exclusive Listings
          </button>
          <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Hero Image Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://picsum.photos/400/500?random=1" 
              alt="Luxury property exterior" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://picsum.photos/400/300?random=2" 
              alt="Premium interior design" 
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img 
              src="https://picsum.photos/400/300?random=3" 
              alt="Elegant living space" 
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://picsum.photos/400/500?random=4" 
              alt="Luxury property view" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">$2.5B+</div>
              <div className="text-xs text-slate-600 mt-1">Properties Sold</div>
            </div>
            <div className="border-l border-r border-slate-200">
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-600 mt-1">Luxury Listings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">98%</div>
              <div className="text-xs text-slate-600 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}